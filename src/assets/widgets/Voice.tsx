import IconButton from "../../components/IconButton";
import { twMerge } from "tailwind-merge"
import { IconType } from "./Icons";

type Props = {
  className?: string
}

export default function Voice({className, ...props}: Props) {
  const handleClick = () => {
    console.log("voice");
  }
  return (
    <IconButton icon={IconType.VoiceIcon} {...props} handleClick={handleClick} className={twMerge("sm:bg-btn-primary", className)} />
  )
}