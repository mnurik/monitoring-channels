

using System.Collections.Generic;
using TvMonitoring.Application.Models;

namespace TvMonitoring.Application.Interfaces
{
    public interface IChannelService
    { 
        List<Channel> GetChannelList();
    }
}
