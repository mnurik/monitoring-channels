using LightInject;
using TvMonitoring.Application.Interfaces;
using TvMonitoring.Infrastructure.Repositaries;

namespace TvMonitoring.Infrastructure
{
    class RepositaryCompositionRoot : ICompositionRoot
    {
        public void Compose(IServiceRegistry serviceRegistry)
        {
            serviceRegistry.Register<IChannelRepositary, ChannelRepositary>(new PerRequestLifeTime());


        }
    }
}
