import { GuideTypes } from "../assets/static/types";
import { Home, Shorts, Subscription, Library } from "../assets/widgets/Icons"
import MiniGuideEntry from "../components/MiniGuideEntry"
import { useGuidebarContext } from "../contexts/GuidebarContextProvider";

export default function MiniGuide() {
  const { guideLayout } = useGuidebarContext();

  return (
    <div className={`min-[729px]:max-[1312px]:flex max-[729px]:hidden ${guideLayout===GuideTypes.Mini? "min-[1312px]:flex":"min-[1312px]:hidden"} 
    flex-col items-center w-guide-small fixed top-14 bottom-0 text-[10px] px-1`}>
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