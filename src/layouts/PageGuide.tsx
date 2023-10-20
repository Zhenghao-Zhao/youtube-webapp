import * as All from "../assets/widgets/Icons";
import GuideEntry from "../components/GuideEntry";

export default function PageGuide() {
  return (
    <div className="flex flex-col w-52 fixed top-12 bottom-0 overflow-y-scroll">
      <div className="guide-section !pt-0">
        <GuideEntry title="Home">
          <All.Home />
        </GuideEntry>
        <GuideEntry title="Shorts">
          <All.Shorts />
        </GuideEntry>
        <GuideEntry title="Subscriptions">
          <All.Subscription />
        </GuideEntry>
      </div>
      <div className="guide-section">
        <GuideEntry title="Library">
          <All.Library />
        </GuideEntry>
        <GuideEntry title="History">
          <All.History />
        </GuideEntry>        
      </div>
      <div className="guide-section mt-1">
        <p>Explore</p>
        <GuideEntry title="Trending">
          <All.Trending />
        </GuideEntry>
        <GuideEntry title="Music">
          <All.Music />
        </GuideEntry>
        <GuideEntry title="Movies">
          <All.Movies />
        </GuideEntry>
        <GuideEntry title="Live">
          <All.Live />
        </GuideEntry>
        <GuideEntry title="Gaming">
          <All.Gaming />
        </GuideEntry>
        <GuideEntry title="News">
          <All.News />
        </GuideEntry>
        <GuideEntry title="Sports">
          <All.Sports />
        </GuideEntry>
        <GuideEntry title="Podcasts">
          <All.Podcasts />
        </GuideEntry>
      </div>
      <div className="guide-section">
        <p>More from YouTube</p>
      </div>
      <div className="guide-section">
        <GuideEntry title="Settings">
          <All.Settings />
        </GuideEntry>
        <GuideEntry title="Report history">
          <All.ReportHistory />
        </GuideEntry>        
        <GuideEntry title="Help">
          <All.Help />
        </GuideEntry>
        <GuideEntry title="Send feedback">
          <All.SendFeedback />
        </GuideEntry>
      </div>
      <div className="guide-section-borderless">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, molestiae minima! Quod quas laboriosam molestias fugiat. Voluptates nesciunt optio placeat.
      </div>
    </div>
  )
}