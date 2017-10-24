
using System.Collections.Generic; 
using TvMonitoring.Application.Models;

namespace TvMonitoring.Application.Interfaces
{
    public interface IChannelRepositary
    {
        void Save(Channel model); 
        List<Channel> GetAll();
        bool Delete(long id); 
        bool StartAll();
        bool Start(long id);
        bool StopAll();
        bool Stop(long id);
        List<Channel> GetActives();





    }
}
