import { MenuIcon } from "../assets/widgets/Icons";
import Logo from "../assets/widgets/Logo";
import IconButton from "../components/IconButton";
import { useGuidebarContext } from "../contexts/GuidebarContextProvider";
import PageGuide from "./PageGuide";


export default function OverlayGuide() {
  const { showOverlay, setShowOverlay } = useGuidebarContext();

  return (
      <div className={`fixed z-[1000] bg-white h-full ${!showOverlay && "-translate-x-full"} transition-all`}>
        <div className= "flex gap-4 items-center shrink-0 h-14 w-guide-normal px-4 bg-white">
          <IconButton handleClick={ () => setShowOverlay(false) }>
            <MenuIcon />
          </IconButton>
          <a href="/">
            <Logo />
          </a>
        </div>
        <PageGuide className={`absolute ${showOverlay? "max-[1312px]:flex" : "max-[1312px]:hidden"}`} />
      </div>
  )
}