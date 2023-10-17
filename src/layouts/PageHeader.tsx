import { Menu } from "../assets/widgets/Icons";
import Logo from "../assets/widgets/Logo";
import Voice from "../assets/widgets/Voice";
import IconButton from "../components/IconButton";
import MenuBar from "../components/MenuBar";
import SearchBar from "../components/SearchBar";

export default function PageHeader() {
  return (
    <div className="flex gap-10 justify-between px-4 py-1">
      <div className="flex gap-4 items-center shrink-0">
        <IconButton>
          <Menu />
        </IconButton>
        <a href="/">
          <Logo />
        </a>
      </div>
      <div className="flex items-center justify-center gap-2 grow">
        <SearchBar />
        <Voice />
      </div>
      <div className="flex items-center shrink-0">
        <MenuBar />
      </div>
    </div>
  )
}