import Create from "../assets/widgets/Create";
import { IconType } from "../assets/widgets/Icons";
import Notification from "../assets/widgets/Notification";
import Profile from "../assets/widgets/Profile";
import Voice from "../assets/widgets/Voice";
import IconButton from "./IconButton";
import TooltipWrapper from "./TooltipWrapper";

type Props = {
  setIsOpen: (b: boolean) => void;
}

export default function MenuBar({ setIsOpen }: Props) {
  return (
    <div className="flex items-center">
      <IconButton icon={IconType.SearchIcon} handleClick={ () => setIsOpen(true) } className="sm:hidden" />

      <TooltipWrapper content="Voice">
        <Voice className="sm:hidden"/>
      </TooltipWrapper>

      <TooltipWrapper content="Create">
        <Create />
      </TooltipWrapper>

      <TooltipWrapper content="Notification">
        <Notification />
      </TooltipWrapper>
      
      <Profile />
    </div>
  )
}