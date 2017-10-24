 
using LightInject;
using TvMonitoring.Application.Interfaces;
using TvMonitoring.Application.Services;

namespace TvMonitoring.Application
{
    class RepositaryCompositionRoot : ICompositionRoot
    {
        public void Compose(IServiceRegistry serviceRegistry)
        {
            serviceRegistry.Register<IChannelService, ChannelService>(new PerRequestLifeTime());


        }
    }
}
