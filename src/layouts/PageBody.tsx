import ChipBar from "../components/ChipBar";
import VideoPanel from "../components/VideoPanel";

type Props = {
  showMiniGuide: boolean;
}

export default function PageBody({ showMiniGuide }: Props) {
  return (
    <div className={`mt-10 ${showMiniGuide? "ml-guide-small":"ml-guide-normal"} px-4 py-2`}>
      <ChipBar />
      <VideoPanel />
    </div>
  )
}