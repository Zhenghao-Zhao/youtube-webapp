import ChipBar from "../components/ChipBar";
import VideoPanel from "../components/VideoPanel";

type Props = {
  showMiniGuide: boolean;
}

export default function PageBody({ showMiniGuide }: Props) {
  return (
    <div className={`mt-14 ${showMiniGuide? "ml-guide-small":"ml-guide-normal"} px-6 fixed left-0 right-0`}>
      <ChipBar />
      <VideoPanel />
    </div>
  )
}