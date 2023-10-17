import Create from "../assets/widgets/Create";
import Notification from "../assets/widgets/Notification";
import Profile from "../assets/widgets/Profile";
import Search from "../assets/widgets/Search";
import Voice from "../assets/widgets/Voice";
import { Dispatch, SetStateAction } from "react";
import IconButton from "./IconButton";

type Props = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function MenuBar({ setIsOpen }: Props) {
  return (
    <div className="flex gap-1 items-center">
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