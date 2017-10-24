

using System.Collections.Generic;
using TvMonitoring.Application.Models;

namespace TvMonitoring.Application.Interfaces
{
    public interface IChannelService
    {
        ActionResult<List<Channel>> GetChannelList();
        ActionResult<bool> StartAll();
        ActionResult<bool> Start(long id);
        ActionResult<bool> StopAll();
        ActionResult<bool> Stop(long id);
        ActionResult<List<Channel>> GetActives();

        
    }
}
