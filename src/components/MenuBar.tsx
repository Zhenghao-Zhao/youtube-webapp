import Create from "../assets/widgets/Create";
import Notification from "../assets/widgets/Notification";
import Profile from "../assets/widgets/Profile";
import Search from "../assets/widgets/Search";
import Voice from "../assets/widgets/Voice";
import IconButton from "./IconButton";

type Props = {
  setIsOpen: (b: boolean) => void;
}

export default function MenuBar({ setIsOpen }: Props) {
  return (
    <div className="flex items-center">
      <IconButton handleClick={ () => setIsOpen(true) } className="sm:hidden">
        <Search />
      </IconButton>
      <Voice className="sm:hidden"/>
      <Create />
      <Notification />
      <Profile />
    </div>
  )
}