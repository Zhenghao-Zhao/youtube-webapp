import Create from "../assets/widgets/Create";
import Notification from "../assets/widgets/Notification";
import Profile from "../assets/widgets/Profile";
import Voice from "../assets/widgets/Voice";
import IconButton from "./IconButton";

type Props = {
  setIsOpen: (b: boolean) => void;
}

export default function MenuBar({ setIsOpen }: Props) {
  return (
    <div className="flex items-center">
      <IconButton icon="SearchIcon" handleClick={ () => setIsOpen(true) } className="sm:hidden" />
      <Voice className="sm:hidden"/>
      <Create />
      <Notification />
      <Profile />
    </div>
  )
}