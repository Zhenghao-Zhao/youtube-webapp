// import Menu from "../assets/widgets/Menu";
import Logo from "../assets/widgets/Logo";
import Voice from "../assets/widgets/Voice";
import MenuBar from "../components/MenuBar";
import SearchBar from "../components/SearchBar";
import { useState } from 'react'
import IconButton from "../components/IconButton";
import { MenuIcon, Return } from "../assets/widgets/Icons";

type Props = {
  toggleGuide: () => void;
}

export default function PageHeader({ toggleGuide }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="flex justify-between items-center gap-2 fixed w-full top-0 z-50 bg-white">
      <div className={`${isOpen? "hidden sm:flex" : "flex"} gap-4 items-center shrink-0 py-1 px-4`}>
        <IconButton handleClick={toggleGuide}>
          <MenuIcon />
        </IconButton>
        <a href="/">
          <Logo />
        </a>
      </div>
      { isOpen && 
      <IconButton handleClick={() => setIsOpen(false)} className="sm:hidden">
        <Return />
      </IconButton>
      }
      <div className={`${isOpen? "flex" : "hidden sm:flex"} items-center justify-center gap-2 grow`}>
        <SearchBar setIsOpen={setIsOpen}/>
        <Voice />
      </div>
      <div className={`${isOpen? "hidden sm:flex" : "flex"} items-center shrink-0 pr-4`}>
        <MenuBar setIsOpen={ setIsOpen }/>
      </div>
    </div> 
  )
}