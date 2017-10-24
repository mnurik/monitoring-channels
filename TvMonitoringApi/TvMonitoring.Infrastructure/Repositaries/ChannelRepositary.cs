using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using AutoMapper;
using TvMonitoring.Application.Interfaces;
using TvMonitoring.Application.Models;
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
          
        public bool Delete(long id)
        {
          var obj=  _dataContext.Channels.FirstOrDefault(x => x.Id == id);
            if (obj!=null)
            {
                obj.IsDeleted = true;
            }
            _dataContext.SubmitChanges();
            return true;
        }

        public List<Channel> GetAll()
        {
            StopAll();
            var channels = _dataContext.Channels
                .Where(x => x.IsDeleted == false)
                .ToList();
            return _mapper.Map<List<Channel>>(channels);
        }
         
        public bool StartAll()
        {
            StopAll();
            var channels = _dataContext.Channels
                .Where(x=>x.IsDeleted==false)
                .Select(x => x.Id)
                .ToList();
            foreach (var chId in channels)
            {
                _dataContext.MonitoredChannels.InsertOnSubmit(new MonitoredChannel()
                {
                    IsDeleted = false,
                    ChannelId = chId,
                    StartDate = DateTime.Now
                });
            }
            _dataContext.SubmitChanges();
            return true;
        }

        public bool Start(long id)
        {
            Stop(id);
            _dataContext.MonitoredChannels.InsertOnSubmit(new MonitoredChannel()
            {
                IsDeleted = false,
                ChannelId = id,
                StartDate = DateTime.Now
            });

            _dataContext.SubmitChanges();
            return true;
        }

        public bool StopAll()
        {
            var actives = _dataContext.MonitoredChannels
                  .Where(x => x.IsDeleted == false)
                  .ToList();
            actives.ForEach(x => x.IsDeleted = true);
            _dataContext.SubmitChanges();
            return true;
        }

        public bool Stop(long id)
        {
            var actives = _dataContext.MonitoredChannels
                .Where(x => x.IsDeleted == false && x.ChannelId == id)
                .ToList();
            actives.ForEach(x => x.IsDeleted = true);
            _dataContext.SubmitChanges();
            return true;
        }

        public List<Channel> GetActives()
        {
            var activeChannels = _dataContext.MonitoredChannels
                .Where(x => x.IsDeleted == false)
                .Select(x => x.ChannelId)
                .ToList();

            var channels = _dataContext.Channels
                .Where(x => activeChannels.Contains(x.Id)&& x.IsDeleted==false)
                .ToList();
            return _mapper.Map<List<Channel>>(channels);
        }

         
    }
}
