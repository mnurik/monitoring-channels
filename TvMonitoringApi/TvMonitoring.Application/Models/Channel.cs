

using System.Collections.Generic;

namespace TvMonitoring.Application.Models
{
    public class Channel
    {
        public Channel()
        {
            ChannelItems = new List<ChannelItem>();
            Frequency = 500;
            CheckCount = 3;
            LogoUrl = "/images/noimg.jpg";
            ScreenShotUrl = "/images/noimg.jpg";

        }

        public long Id { get; set; }

        public string Name { get; set; }

        public string LogoUrl { get; set; }

        public string ScreenShotUrl { get; set; }

        public bool IsSuccess { get; set; }

        public int Frequency { get; set; }

        public int CheckCount { get; set; }

        public List<ChannelItem> ChannelItems { get; set; }
    }
}
