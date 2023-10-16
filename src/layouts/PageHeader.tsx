import Logo from "../assets/widgets/Logo";
import Menu from "../assets/widgets/Menu";
import MenuBar from "../components/MenuBar";
import SearchBar from "../components/SearchBar";

export default function PageHeader() {
  return (
    <div className="flex gap-10 lg:gap-20 justify-between px-4 py-1">
      <div className="flex gap-4 items-center flex-shrink-0">
        <button>
          <Menu />
        </button>
        <a href="/">
          <Logo />
        </a>
      </div>
      <div className="flex items-center">
        <SearchBar />
      </div>
      <div className="flex items-center">
        <MenuBar />
      </div>
    </div>
  )
}