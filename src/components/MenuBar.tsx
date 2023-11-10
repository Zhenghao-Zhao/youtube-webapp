import Create from "../assets/widgets/Create";
import { IconType } from "../assets/static/Icons";
import Notification from "../assets/widgets/Notification";
import Profile from "../assets/widgets/Profile";
import Voice from "../assets/widgets/Voice";
import IconButton from "../assets/widgets/IconButton";

type Props = {
  setIsOpen: (b: boolean) => void;
}

export default function MenuBar({ setIsOpen }: Props) {
  return (
    <div className="flex items-center">
      <IconButton icon={IconType.SearchIcon} handleClick={ () => setIsOpen(true) } className="sm:hidden" tip="Search"/>
      <Voice className="sm:hidden"/>
      <Create />
      <Notification />
      <Profile />
    </div>
  )
}