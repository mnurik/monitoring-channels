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


        }

    }
}
