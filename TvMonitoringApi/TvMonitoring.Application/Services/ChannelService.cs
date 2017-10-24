
using System;
using System.Collections.Generic;
using TvMonitoring.Application.Interfaces;
using TvMonitoring.Application.Models;

namespace TvMonitoring.Application.Services
{
    public class ChannelService : IChannelService
    {
        private readonly IChannelRepositary _channelRepositary;
        public ChannelService(IChannelRepositary channelRepositary)
        {
            _channelRepositary = channelRepositary;
        }

        public ActionResult<List<Channel>> GetChannelList()
        {
            try
            {
                var obj = _channelRepositary.GetAll();

                return new ActionResult<List<Channel>>(obj);

            }
            catch (Exception ex)
            {

                return new ActionResult<List<Channel>>(ex);
            }


        }

        public ActionResult<bool> StartAll()
        {
            try
            {
                return new ActionResult<bool>(_channelRepositary.StartAll());
            }
            catch (Exception ex)
            {
                return new ActionResult<bool>(ex); 
            }
        }

        public ActionResult<bool> Start(long id)
        {
            try
            {
                return new ActionResult<bool>(_channelRepositary.Start(id));
            }
            catch (Exception ex)
            {
                return new ActionResult<bool>(ex);
            }
        }

        public ActionResult<bool> StopAll()
        {
            try
            {
                return new ActionResult<bool>(_channelRepositary.StopAll());
            }
            catch (Exception ex)
            {
                return new ActionResult<bool>(ex);
            }
        }

        public ActionResult<bool> Stop(long id)
        {
            try
            {
                return new ActionResult<bool>(_channelRepositary.Stop(id));
            }
            catch (Exception ex)
            {
                return new ActionResult<bool>(ex);
            }
        }

        public ActionResult<List<Channel>> GetActives()
        {
            try
            {
                var obj = _channelRepositary.GetActives();
                return new ActionResult<List<Channel>>(obj);
            }
            catch (Exception ex)
            {
                return new ActionResult<List<Channel>>(ex);
            }
        }
    }
}
