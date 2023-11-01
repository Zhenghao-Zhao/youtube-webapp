import Logo from "../assets/widgets/Logo";
import IconButton from "../components/IconButton";
import { useGuidebarContext } from "../contexts/GuidebarContextProvider";
import PageGuide from "./PageGuide";


export default function OverlayGuide() {
  const { showOverlay, setShowOverlay } = useGuidebarContext();

  return (
      <section className={`fixed z-[1000] bg-white h-full ${!showOverlay && "-translate-x-full"} transition-all`}>
        <div className= "flex gap-4 items-center shrink-0 h-14 w-guide-normal px-4 bg-white">
          <IconButton icon="MenuIcon" handleClick={ () => setShowOverlay(false) } />
          <a href="/">
            <Logo />
          </a>
        </div>
        <PageGuide className={`absolute ${showOverlay? "max-lgGb:flex" : "max-lgGb:hidden"}`} />
      </section>
  )
}