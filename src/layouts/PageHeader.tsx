import Menu from "../assets/widgets/Menu";
import Logo from "../assets/widgets/Logo";
import Voice from "../assets/widgets/Voice";
import MenuBar from "../components/MenuBar";
import SearchBar from "../components/SearchBar";
import { useState } from 'react'
import IconButton from "../components/IconButton";
import { Return } from "../assets/widgets/Icons";

export default function PageHeader() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="flex justify-between items-center px-4 py-1 gap-2">
      <div className={`${isOpen? "hidden sm:flex" : "flex"} gap-4 items-center shrink-0`}>
        <Menu />
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
      <div className={`${isOpen? "hidden sm:flex" : "flex"} items-center shrink-0`}>
        <MenuBar setIsOpen={ setIsOpen }/>
      </div>
    </div> 
  )
}