
using System.Collections.Generic;
using System.Web.Http;
using TvMonitoring.Api.Constant;
using TvMonitoring.Application.Interfaces;
using TvMonitoring.Application.Models;

namespace TvMonitoring.Api.Controllers
{
    /// <summary>
    /// 
    /// </summary>
    [AllowAnonymous]
    [RoutePrefix(Route.ChannelPrefix)]
    public class ChannelController : ApiController
    {
        private readonly IChannelService _channelService;
        /// <summary>
        /// 
        /// </summary>
        /// <param name="channelService"></param>
        public ChannelController(IChannelService channelService)
        {
            _channelService = channelService;
        }

        // GET: api/Channel/GetAll
        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route(Route.GetAllChannelList)]
        public IEnumerable<Channel> GetAllChannelList()
        {
            return _channelService.GetChannelList();
        }

        //// GET: api/Channel/5
        //public string Get(int id)
        //{
        //    return "value";
        //}

        //// POST: api/Channel
        //public void Post([FromBody]string value)
        //{
        //}

        //// PUT: api/Channel/5
        //public void Put(int id, [FromBody]string value)
        //{
        //}

        //// DELETE: api/Channel/5
        //public void Delete(int id)
        //{
        //}
    }
}
