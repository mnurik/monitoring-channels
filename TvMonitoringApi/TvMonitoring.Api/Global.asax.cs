using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using AutoMapper;
using LightInject;
using LightInject.ServiceLocation;
using System;
using System.Linq;
using Microsoft.Practices.ServiceLocation;
using ServiceContainer = LightInject.ServiceContainer;
using TvMonitoring.Infrastructure.DataModels;

namespace TvMonitoring.Api
{
    public partial class WebApiApplication : HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            GlobalConfiguration.Configure(WebApiConfig.Register);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);
            ConfigureIoC(GlobalConfiguration.Configuration);
        }

        void ConfigureIoC(HttpConfiguration config)
        {
            var serviceContainer = new ServiceContainer();
            RegisterMapper(serviceContainer);
            RegisterDataAccess(serviceContainer);
            RegisterCompositionRoots(serviceContainer);
            IServiceLocator serviceLocator = new LightInjectServiceLocator(serviceContainer);
            ServiceLocator.SetLocatorProvider(() => serviceLocator);
          serviceContainer.EnablePerWebRequestScope();
            serviceContainer.RegisterApiControllers();
            serviceContainer.EnableWebApi(config);
        }

        private void RegisterMapper(IServiceRegistry serviceContainer)
        {
            //serviceContainer.Register<IConfigurationProvider>(fac => CreateMapperConfiguration(), new PerContainerLifetime());
            serviceContainer.Register<IMapper>(fac => CreateMapperConfiguration(), new PerContainerLifetime());
        }

        private IMapper CreateMapperConfiguration()
        {
            var profiles =
                AppDomain.CurrentDomain.GetAssemblies()
                            .Where(asm => asm.FullName.StartsWith("TvMonitoring"))
                                .SelectMany(asm => asm.GetTypes()).Where(t => typeof(Profile).IsAssignableFrom(t));

            var config = new MapperConfiguration(cfg =>
            {
                foreach (var profile in profiles)
                {
                    cfg.AddProfile(profile);
                }
            });

            config.AssertConfigurationIsValid();

            return config.CreateMapper();
        }

        private void RegisterDataAccess(ServiceContainer serviceContainer)
        {
            //string connectionString = ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;
            serviceContainer.Register(fac => new TvMonitoringDataContextDataContext(), new PerRequestLifeTime());
        }

        private void RegisterCompositionRoots(ServiceContainer serviceContainer)
        {
            serviceContainer.RegisterAssembly("TvMonitoring.*.dll");
            //serviceContainer.RegisterAssembly("Web.*.dll");
        }

    }
}
