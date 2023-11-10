import { useEffect } from "react";
import Logo from "../assets/widgets/Logo";
import IconButton from "../assets/widgets/IconButton";
import { useGuidebarContext } from "../contexts/GuidebarContextProvider";
import Guidebar from "./GuideBar";
import { minLarge } from "../constants";
import { GuideSections } from "../assets/static/Data";
import { IconType } from "../assets/static/Icons";


export default function OverlayGuide() {
  const { showOverlay, setShowOverlay } = useGuidebarContext();
  
  useEffect(() => {
    function handler(e:MediaQueryListEvent) {
      if (e.matches) {
        setShowOverlay(false);
      }
    }
    minLarge.addEventListener('change', handler)

    return () => {
      minLarge.removeEventListener('change', handler);
    }
  }, [])

  return (
      <section className={`fixed z-[1000] bg-white h-full ${!showOverlay && "-translate-x-full"} transition-all`}>
        <div className= "flex gap-4 items-center shrink-0 h-14 w-guide-normal px-4 bg-white">
          <IconButton icon={IconType.MenuIcon} handleClick={ () => setShowOverlay(false) } />
          <a href="/">
            <Logo />
          </a>
        </div>
        <Guidebar className={`absolute ${showOverlay? "max-lgGb:flex" : "max-lgGb:hidden"}`} GuideSections={GuideSections} />
      </section>
  )
}