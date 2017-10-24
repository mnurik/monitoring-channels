
namespace TvMonitoring.Application.Models
{
    public class ChannelItem
    {
        public long Id { get; set; }

        public string Ip { get; set; }

        public int Port { get; set; }

        public int Type { get; set; }

        public bool IsSuccess { get; set; }

    }
}
