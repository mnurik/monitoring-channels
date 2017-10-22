
using System.Collections.Generic;
using System.Security.Cryptography.X509Certificates;
using TvMonitoring.Application.Models;

namespace TvMonitoring.Application.Interfaces
{
    public interface IChannelRepositary
    {
        void Save(Channel model);
        Channel GetById(long id);
        List<Channel> GetList();
        void Delete(long id);

    }
}
