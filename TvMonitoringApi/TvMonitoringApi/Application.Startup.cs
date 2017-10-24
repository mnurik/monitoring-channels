using AutoMapper; 
using LightInject;
using LightInject.ServiceLocation;  
using System;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.Http;
using Microsoft.Practices.ServiceLocation;
using TvMonitoring.Infrastructure.DataModels;
using ServiceContainer = LightInject.ServiceContainer;

namespace TvMonitoring.Api
{
    public partial class Startup
    {
        void ConfigureIoC(HttpConfiguration config)
        {
            var serviceContainer = new ServiceContainer();

            RegisterMapper(serviceContainer);
            RegisterDataAccess(serviceContainer);
            RegisterCompositionRoots(serviceContainer);
            //RegisterIdentity(serviceContainer);
            //RegisterMediator(serviceContainer);
            //RegisterHandlers(serviceContainer);

            IServiceLocator serviceLocator = new LightInjectServiceLocator(serviceContainer);
            ServiceLocator.SetLocatorProvider(() => serviceLocator);

            serviceContainer.EnablePerWebRequestScope();
            serviceContainer.RegisterApiControllers();
            serviceContainer.EnableWebApi(config);
        }

        //private void RegisterIdentity(IServiceRegistry serviceContainer)
        //{

        //    serviceContainer.Register<IAuthenticationManager>(fac => HttpContext.Current.GetOwinContext().Authentication, new PerRequestLifeTime());
        //    serviceContainer.Register<IUserStore<CustomUser>, CustomUserStore<CustomUser>>(new PerRequestLifeTime());

        //}

        private void RegisterCompositionRoots(ServiceContainer serviceContainer)
        {
            serviceContainer.RegisterAssembly("TvMonitoring.*.dll");
            //serviceContainer.RegisterAssembly("Web.*.dll");

        }

        private void RegisterMapper(IServiceRegistry serviceContainer)
        {
            //serviceContainer.Register<IConfigurationProvider>(fac => CreateMapperConfiguration(), new PerContainerLifetime());
            serviceContainer.Register<IMapper>(fac => CreateMapperConfiguration(), new PerContainerLifetime());
        }

        //private void RegisterMediator(IServiceRegistry serviceContainer)
        //{
        //    serviceContainer.RegisterAssembly(typeof(IMediator).Assembly, (serviceType, implementingType) => !serviceType.IsClass);
        //    serviceContainer.Register<SingleInstanceFactory>(fac => t => fac.GetInstance(t), new PerContainerLifetime());
        //    serviceContainer.Register<MultiInstanceFactory>(fac => t => fac.GetAllInstances(t), new PerContainerLifetime());
        //}


        //private void RegisterHandlers(IServiceRegistry serviceContainer)
        //{
        //    serviceContainer.RegisterAssembly(GetType().Assembly, () => new PerContainerLifetime(), (serviceType, implementingType) =>
        //        serviceType.IsGenericType && serviceType.GetGenericTypeDefinition() == typeof(IAsyncRequestHandler<,>));

        //    serviceContainer.RegisterAssembly(GetType().Assembly, () => new PerContainerLifetime(), (serviceType, implementingType) =>
        //        serviceType.IsGenericType && serviceType.GetGenericTypeDefinition() == typeof(IRequestHandler<,>));
        //}

        private IMapper CreateMapperConfiguration()
        {
            var profiles =
                AppDomain.CurrentDomain.GetAssemblies()
                            .Where(asm => asm.FullName.StartsWith("TvMonitoring") )
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

    }
}