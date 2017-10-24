
using System.Collections.Generic;
using TvMonitoring.Application.Interfaces;
using TvMonitoring.Application.Models;

namespace TvMonitoring.Application.Services
{
    public class ChannelService: IChannelService
    {
       private readonly IChannelRepositary _channelRepositary;
        public ChannelService(IChannelRepositary channelRepositary)
        {
            _channelRepositary = channelRepositary;
        }

        public List<Channel> GetChannelList()
        {
           return _channelRepositary.GetList();
        }
    }
}
