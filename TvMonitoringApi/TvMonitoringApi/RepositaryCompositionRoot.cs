 using System.Web.Http.Description;
using LightInject;
using TvMonitoring.Api.Areas.HelpPage; 

namespace TvMonitoring.Api
{
    class RepositaryCompositionRoot : ICompositionRoot
    {
        public void Compose(IServiceRegistry serviceRegistry)
        {
            serviceRegistry.Register<IDocumentationProvider, XmlDocumentationProvider>(new PerRequestLifeTime());


        }
    }
}