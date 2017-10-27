
using System.Collections.Generic;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using TvMonitoring.Application.Interfaces;
using TvMonitoring.Application.Models;

namespace TvMonitoring.Api.Controllers
{
    [RoutePrefix("api/channel")]
    public class ChannelController : ApiController
    {
        private readonly IChannelService _channelService;
        public ChannelController(IChannelService channelService)
        {
            _channelService = channelService;
        }
        
        // GET api/channel/All
        [Route("All")]
        [HttpGet]
        public ActionResult<List<Channel>> All()
        {
            return _channelService.GetChannelList(); 
        }

        // GET api/channel/StartAll
        [Route("StartAll")]
        [HttpGet]
        public ActionResult<bool> StartAll()
        {
            return _channelService.StartAll();
        }

        // GET api/channel/Start
        [Route("Start")]
        [HttpGet]
        public ActionResult<bool> Start(long id)
        {
            return _channelService.Start(id);
        }

        // GET api/channel/StopAll
        [Route("StopAll")]
        [HttpGet]
        public ActionResult<bool> StopAll()
        {
            return _channelService.StopAll();
        }

        // GET api/channel/Stop
        [Route("Stop")]
        [HttpGet]
        public ActionResult<bool> Stop(long id)
        {
            return _channelService.Stop(id);
        }

        // GET api/channel/GetActives
        [Route("GetActives")]
        [HttpGet]
        public ActionResult<List<Channel>> GetActives(bool withImage=true)
        {
            Util.Util.service = _channelService;
            return Util.Util.CheckChannel(withImage) ;
        }

        // GET api/channel/Delete
        [Route("Delete")]
        [HttpGet]
        public ActionResult<bool> Delete(long id)
        {
           
            return _channelService.Delete(id);
        }

        // GET api/channel/Save
        [Route("Save")]
        [HttpPost]
        public ActionResult<bool> Save(Channel model)
        {

            return _channelService.Save(model);
        }

    }
}
