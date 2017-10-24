using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using TvMonitoring.Application.Interfaces;
using TvMonitoring.Infrastructure.DataModels;
using Channel = TvMonitoring.Application.Models.Channel;

namespace TvMonitoring.Infrastructure.Repositaries
{
    public class ChannelRepositary : IChannelRepositary
    {
        private readonly TvMonitoringDataContextDataContext _dataContext;
        private readonly IMapper _mapper;
        public ChannelRepositary(TvMonitoringDataContextDataContext dataContext, IMapper mapper)
        {
            _dataContext = dataContext;
            _mapper = mapper;
        }

        public void Save(Channel model)
        {
            throw new System.NotImplementedException();
        }

        public Channel GetById(long id)
        {
            throw new System.NotImplementedException();
        }

        public List<Channel> GetList()
        {
            var channels = _dataContext.Channels.ToList();
            return _mapper.Map<List<Channel>>(channels);
        }

        public void Delete(long id)
        {
            throw new System.NotImplementedException();
        }
    }
}
