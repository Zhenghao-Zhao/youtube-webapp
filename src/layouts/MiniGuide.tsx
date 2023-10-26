import { Home, Shorts, Subscription, Library } from "../assets/widgets/Icons"
import MiniGuideEntry from "../components/MiniGuideEntry"

export default function MiniGuide() {
  return (
    <div className="flex flex-col items-center w-guide-small fixed top-14 bottom-0 text-[10px] px-1">
      <MiniGuideEntry title="Home">
        <Home />
      </MiniGuideEntry>
      <MiniGuideEntry title="Shorts">
        <Shorts />
      </MiniGuideEntry>
      <MiniGuideEntry title="Subscription">
        <Subscription />
      </MiniGuideEntry>
      <MiniGuideEntry title="Library">
        <Library />
      </MiniGuideEntry>
    </div>
  )
}