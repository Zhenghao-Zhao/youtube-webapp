import IconButton from "../../components/IconButton";
import { twMerge } from "tailwind-merge"
import { IconType } from "./Icons";

type Props = {
  className?: string
}

export default function Voice({className, ...props}: Props) {
  return (
    <IconButton icon={IconType.VoiceIcon} {...props} className={twMerge("sm:bg-btn-primary", className)} />
  )
}