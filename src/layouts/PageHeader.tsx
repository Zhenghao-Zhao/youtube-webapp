import Logo from "../assets/widgets/Logo";
import Button from "../components/Button";
import MenuBar from "../components/MenuBar";
import SearchBar from "../components/SearchBar";
import { Menu, Upload, Bell, User } from "lucide-react"

export default function PageHeader() {
  return (
    <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4">
      <div className="flex gap-4 items-center flex-shrink-0">
        <Button id="button" variant="ghost" size="icon">
          <Menu />
        </Button>
        <a href="/">
          <Logo />
        </a>
      </div>
      <form>
        
      </form>
      <div className="flex flex-shrink-0 md:gap-2">
        <Button size="icon" variant="ghost">
          <Upload />
        </Button>
        <Button size="icon" variant="ghost">
          <Bell />
        </Button>
        <Button size="icon" variant="ghost">
          <User />
        </Button>
      </div>
    </div>
  )
}