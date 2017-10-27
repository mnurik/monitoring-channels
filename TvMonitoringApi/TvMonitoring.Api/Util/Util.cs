
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Sockets;
using System.Security.Cryptography.X509Certificates;
using System.Threading;
using System.Threading.Tasks;
using System.Web;
using Microsoft.Ajax.Utilities;
using Microsoft.Practices.ServiceLocation;
using TvMonitoring.Application.Interfaces;
using TvMonitoring.Application.Models;

namespace TvMonitoring.Api.Util
{
    public static class Util
    {
        public static IChannelService service;

        public static ActionResult<List<Channel>> CheckChannel( bool withImage)
        {
            try
            {
                var context = HttpContext.Current;
                var channelList = service.GetActives();

                if (channelList.IsSuccess)
                {
                    List<Thread> threads = new List<Thread>();
                    for (int i = 0; i < channelList.Result.Count; i++)
                    {
                        var channel = channelList.Result[i];
                        var channelOutItems = channel.ChannelItems.Where(x => x.Type == 1).ToList();
                        var channelInItems = channel.ChannelItems.Where(x => x.Type == 2).ToList();

                        foreach (var item in channelOutItems)
                        {
                            item.IsSuccess = Check(item.Ip, item.Port, channel.CheckCount, channel.Frequency).Result;
                        }
                        if (channelOutItems.Any(x => x.IsSuccess))
                        {
                            channelInItems.ForEach(x => x.IsSuccess = true);
                        }
                        channel.ScreenShotUrl = "/images/errorImg.jpg";
                        channel.IsSuccess = channel.ChannelItems.All(x => x.IsSuccess);
                        if (withImage)
                        {
                            var output = channel.ChannelItems.OrderBy(x => x.Id).FirstOrDefault(x => x.IsSuccess && x.Type == 1);
                            if (output != null)
                            {
                                Thread thread = new Thread(() =>
                                {
                                    Thread.Sleep(channelList.Result.Count * 200);
                                    TakeCapture(channel, output.Ip, output.Port, context);

                                });
                                thread.IsBackground = true;
                                threads.Add(thread);
                                thread.Start();
                                //  thread.Join();
                            }
                        }
                        else
                        {
                            channel.ScreenShotUrl = "/images/noImg.jpg";
                        }
                       
                    }
                    foreach (var thread in threads)
                    { 
                        thread.Join(); 
                    }
                    //bool allDone = false;
                    //while (!allDone)
                    //{
                    //   // allDone = true;
                    //    allDone= !threads.Any(x => x.IsAlive);
                    //}


                }

                return channelList;
            }
            catch (Exception ex)
            {
                return new ActionResult<List<Channel>>(ex);
            }
        }

        static async Task<bool> Check(string ip, int port, int tryCount = 3, int sleepTime = 500)
        {
            using (UdpClient sock = new UdpClient(port))
            {
                // IPEndPoint ipEnd = new IPEndPoint(IPAddress.Parse(channel.Ip), channel.Port);
                sock.JoinMulticastGroup(IPAddress.Parse(ip), 15);
                int count = 0;
                while (count <= tryCount)
                {
                    //var data =await sock.ReceiveAsync();
                    var available = sock.Available;
                    if (available > 0)
                    {
                        sock.Close();
                        return true;
                    }
                    count++;
                    Thread.Sleep(sleepTime);

                }
                sock.DropMulticastGroup(IPAddress.Parse(ip));
                sock.Close();
                sock.Dispose();
                return false;
            }
        }


        static void TakeCapture(Channel channel, string ip, int port, HttpContext context)
        {
            try
            {
                string name = $"{DateTime.Now.Ticks}.jpg";
                var scrDir = context.Server.MapPath("~/images/screenShots");
                if (!Directory.Exists(scrDir))
                {
                    Directory.CreateDirectory(scrDir);
                }
                var utilDir = context.Server.MapPath("~/Util");
                var imageDir = Path.Combine(scrDir, name);
                string command = $"-y -i udp://{ip}:{port} -vframes 1 {imageDir}";
                string filename = Path.Combine(utilDir, "ffmpeg.exe");
                using (Process ffmpeg = new Process())
                {
                    ffmpeg.StartInfo.UseShellExecute = false;
                    ffmpeg.StartInfo.RedirectStandardOutput = true;
                    ffmpeg.StartInfo.FileName = filename;
                    ffmpeg.StartInfo.Arguments = command;
                    ffmpeg.Start();
                    //Thread.Sleep(1);
                    ffmpeg.WaitForExit();

                    if (!File.Exists(imageDir))
                        channel.ScreenShotUrl = "/images/errorImg.jpg";
                    else
                        channel.ScreenShotUrl = $"/images/ScreenShots/{name}";
                }

            }
            catch (Exception ex)
            {
                channel.ScreenShotUrl = "/images/errorImg.jpg";
            }


        }


        static void TakeCaptureAsync(Channel channel, string ip, int port)
        {

            string name = $"{DateTime.Now.Ticks}.jpg";
            var scrDir = HttpContext.Current.Server.MapPath("~/images/screenShots");
            var utilDir = HttpContext.Current.Server.MapPath("~/Util");
            var imageDir = Path.Combine(scrDir, name);
            string command = $"-y -i udp://{ip}:{port} -vframes 1 {imageDir}";
            string filename = Path.Combine(utilDir, "ffmpeg.exe");

            var tcs = new TaskCompletionSource<bool>();
            Process ffmpeg = new Process();
            ffmpeg.StartInfo.UseShellExecute = false;
            ffmpeg.StartInfo.RedirectStandardOutput = true;
            ffmpeg.StartInfo.FileName = filename;
            ffmpeg.StartInfo.Arguments = command;
            ffmpeg.EnableRaisingEvents = true;
            ffmpeg.Exited += (sender, args) =>
            {
                tcs.SetResult(true);
                ffmpeg.Dispose();
            };
            ffmpeg.Start();

            ffmpeg.WaitForExit();
            channel.ScreenShotUrl = !File.Exists(imageDir) ? "/images/errorImg.jpg" : $"/images/ScreenShots/{name}";


        }


        //static async Task<bool> VaitAllTask(List<Channel> list)
        //{
        //    bool res = false;
        //    while (!res)
        //    {
        //        res = true;
        //        foreach (var channel in list)
        //        {
        //            if (channel.ScreenShotUrl.IsNullOrWhiteSpace())
        //            {
        //                res = false;
        //            }
        //        }
        //        Thread.Sleep(100);
        //    }
        //    return true;
        //}
    }
}