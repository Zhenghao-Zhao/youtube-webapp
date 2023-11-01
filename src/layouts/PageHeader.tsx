// import Menu from "../assets/widgets/Menu";
import Logo from "../assets/widgets/Logo";
import Voice from "../assets/widgets/Voice";
import MenuBar from "../components/MenuBar";
import SearchBar from "../components/SearchBar";
import { useState } from 'react'
import IconButton from "../components/IconButton";
import { useGuidebarContext } from "../contexts/GuidebarContextProvider";

export default function PageHeader() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { guideLayout, setGuideLayout, setShowOverlay } = useGuidebarContext();

  console.log("header");

  const toggleGuide = () => {
    if (window.innerWidth < 1312) {
      setShowOverlay(true);
    } else {
      setGuideLayout(1 - guideLayout!);
    }
  }

  return (
    <section className="flex justify-between items-center fixed w-full top-0 z-50 bg-white h-14">
      <div className={`${isOpen? "hidden sm:flex" : "flex"} gap-4 items-center shrink-0 h-14 px-4`}>
        <IconButton icon="MenuIcon" handleClick={toggleGuide} />
        <a href="/">
          <Logo />
        </a>
      </div>
      { isOpen && 
      <IconButton icon="Return" handleClick={() => setIsOpen(false)} className="sm:hidden" />
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