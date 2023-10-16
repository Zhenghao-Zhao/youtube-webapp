import { Gaming, Help, History, Home, Library, Live, Movies, Music, News, Podcasts, ReportHistory, SendFeedback, Settings, Shorts, Sports, Subscription, Trending } from "../assets/widgets/Icons";
import GuideEntry from "../components/GuideEntry";

export default function PageGuide() {
  return (
    <div className="flex flex-col w-52 fixed top-12 bottom-0 overflow-y-scroll">
      <div className="guide-section">
        <GuideEntry title="Home">
          <Home />
        </GuideEntry>
        <GuideEntry title="Shorts">
          <Shorts />
        </GuideEntry>
        <GuideEntry title="Subscriptions">
          <Subscription />
        </GuideEntry>
      </div>
      <div className="guide-section">
        <GuideEntry title="Library">
          <Library />
        </GuideEntry>
        <GuideEntry title="History">
          <History />
        </GuideEntry>        
      </div>
      <div className="guide-section mt-1">
        <p>Explore</p>
        <GuideEntry title="Trending">
          <Trending />
        </GuideEntry>
        <GuideEntry title="Music">
          <Music />
        </GuideEntry>
        <GuideEntry title="Movies">
          <Movies />
        </GuideEntry>
        <GuideEntry title="Live">
          <Live />
        </GuideEntry>
        <GuideEntry title="Gaming">
          <Gaming />
        </GuideEntry>
        <GuideEntry title="News">
          <News />
        </GuideEntry>
        <GuideEntry title="Sports">
          <Sports />
        </GuideEntry>
        <GuideEntry title="Podcasts">
          <Podcasts />
        </GuideEntry>
      </div>
      <div className="guide-section">
        <p>More from YouTube</p>
      </div>
      <div className="guide-section">
        <GuideEntry title="Settings">
          <Settings />
        </GuideEntry>
        <GuideEntry title="Report history">
          <ReportHistory />
        </GuideEntry>        
        <GuideEntry title="Help">
          <Help />
        </GuideEntry>
        <GuideEntry title="Send feedback">
          <SendFeedback />
        </GuideEntry>
      </div>
      <div className="guide-section-borderless">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, molestiae minima! Quod quas laboriosam molestias fugiat. Voluptates nesciunt optio placeat.
      </div>
    </div>
  )
}