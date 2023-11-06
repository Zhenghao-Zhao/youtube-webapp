import { useGuidebarContext } from "../contexts/GuidebarContextProvider";

type Props = {
  setShowOverlay: (b: boolean) => void
}

export default function Backdrop() {
  const { showOverlay, setShowOverlay } = useGuidebarContext();
  return (
    <div className={`${showOverlay? "fixed" : "hidden"} inset-0 bg-backdrop z-[100]`} onClick={() => setShowOverlay(false)}/>
  )
}