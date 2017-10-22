

using System.Collections.Generic;

namespace TvMonitoring.Application.Models
{
    public class Channel
    {
        public Channel()
        {
        ChannelItems=new List<ChannelItem>();    
        }

        public long Id { get; set; } 

        public string Name { get; set; }

        public string LogoUrl { get; set; }

        public bool IsSuccess { get; set; }

        public List<ChannelItem> ChannelItems;
    }
}
