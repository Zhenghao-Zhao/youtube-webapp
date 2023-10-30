import { GuideTypes } from "../assets/static/types";
import ChipBar from "../components/ChipBar";
import VideoPanel from "../components/VideoPanel";
import { useGuidebarContext } from "../contexts/GuidebarContextProvider";

export default function PageBody() {
  const { guideLayout } = useGuidebarContext();

  return (
    <div className={`mt-14 min-[729px]:max-[1312px]:ml-guide-small ${guideLayout===GuideTypes.Regular? "min-[1312px]:ml-guide-normal":"min-[1312px]:ml-guide-small"} px-6`}>
      <ChipBar />
      <VideoPanel />
    </div>
  )
}