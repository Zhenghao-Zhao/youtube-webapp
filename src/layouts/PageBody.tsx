import { GuideTypes } from "../assets/static/types";
import ChipBar from "../components/ChipBar";
import VideoPanel from "../components/VideoPanel";

type Props = {
  currentLayout: GuideTypes | null;
}

export default function PageBody({ currentLayout }: Props) {
  return (
    <div className={`mt-14 ${currentLayout === null? "" : currentLayout === GuideTypes.Mini? "ml-guide-small":"ml-guide-normal"} px-6`}>
      <ChipBar />
      <VideoPanel />
    </div>
  )
}