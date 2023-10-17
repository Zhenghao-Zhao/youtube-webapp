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
  return isOpen? (
    <div className="flex p-1 items-center justify-between">
      <IconButton handleClick={() => setIsOpen(false)}>
        <Return />
      </IconButton>
      <SearchBar />
    </div>
  ) : (
    <div className="flex justify-between px-4 py-1">
      <div className="flex gap-4 items-center shrink-0">
        <Menu />
        <a href="/">
          <Logo />
        </a>
      </div>
      <div className="flex items-center justify-center gap-2 grow">
        <SearchBar className="hidden sm:flex "/>
        <Voice className="hidden sm:block"/>
      </div>
      <div className="flex items-center shrink-0">
        <MenuBar setIsOpen={ setIsOpen }/>
      </div>
    </div> 
  )
}