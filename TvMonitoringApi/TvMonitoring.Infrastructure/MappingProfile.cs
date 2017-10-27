using AutoMapper;
using TvMonitoring.Infrastructure.DataModels;
using App = TvMonitoring.Application.Models;

namespace TvMonitoring.Infrastructure
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Channel, App.Channel>()
                 .ForMember(x => x.ChannelItems, y => y.MapFrom(x => x.ChannelItems));
            CreateMap<ChannelItem, App.ChannelItem>() ;
            CreateMap< App.ChannelItem, ChannelItem>()
                .ForMember(x => x.Channel, y => y.Ignore())   
                .ForMember(x => x.ChannelId, y => y.Ignore());
            CreateMap<App.Channel, Channel>()
                .ForMember(x => x.IsDeleted, y => y.Ignore())
                 .ForMember(x => x.ChannelItems, y => y.MapFrom(x => x.ChannelItems))
                 .ForMember(x => x.MonitoredChannels, y => y.Ignore());


        }

    }
}
