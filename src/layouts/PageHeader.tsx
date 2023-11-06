import Logo from "../assets/widgets/Logo";
import Voice from "../assets/widgets/Voice";
import MenuBar from "../components/MenuBar";
import SearchBar from "../components/SearchBar";
import { useState } from 'react'
import IconButton from "../components/IconButton";
import { useGuidebarContext } from "../contexts/GuidebarContextProvider";
import { LARGE } from "../constants";
import { IconType } from "../assets/widgets/Icons";

export default function PageHeader() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { guideLayout, setGuideLayout, setShowOverlay } = useGuidebarContext();

  const toggleGuide = () => {
    if (window.innerWidth < LARGE) {
      setShowOverlay(true);
    } else {
      setGuideLayout(1 - guideLayout!);
    }
  }

  return (
    <section className="flex justify-between items-center fixed w-full top-0 z-[100] bg-white h-14">
      <div className={`${isOpen? "hidden sm:flex" : "flex"} gap-4 items-center shrink-0 h-14 px-4`}>
        <IconButton icon={IconType.MenuIcon} handleClick={toggleGuide} />
        <a href="/">
          <Logo />
        </a>
      </div>
      { isOpen && 
      <IconButton icon={IconType.Return} handleClick={() => setIsOpen(false)} className="sm:hidden mx-4" />
      }
      <div className={`${isOpen? "flex" : "hidden sm:flex"} items-center justify-center grow`}>
        <SearchBar setIsOpen={setIsOpen}/>
        <div className="p-2">
          <Voice />
        </div>
      </div>
      <div className={`${isOpen? "hidden sm:flex" : "flex"} items-center shrink-0 pr-4`}>
        <MenuBar setIsOpen={ setIsOpen }/>
      </div>
    </section> 
  )
}