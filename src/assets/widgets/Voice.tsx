import IconButton from "../../components/IconButton";
import { twMerge } from "tailwind-merge"

type Props = {
  className?: string
}

export default function Voice({className, ...props}: Props) {
  const handleClick = () => {
    console.log("voice");
  }
  return (
    <IconButton icon="VoiceIcon" {...props} handleClick={handleClick} className={twMerge("sm:bg-btn-primary", className)} />
  )
}