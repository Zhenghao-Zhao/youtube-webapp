import { ArrowRight } from "../assets/widgets/Icons";
import IconButton from "./IconButton";
import { twMerge } from "tailwind-merge"

type Props = {
  className?: string;
  handleClick?: () => void;
}

export default function ArrowButton({ className, handleClick }: Props) {
  return (
    <div className={twMerge("absolute right-0 w-28 h-full items-center flex", className)}>
      <div className="shrink-0 w-full h-full bg-gradient-to-r from-transparent via-white to-white" />
      <div className="absolute right-0 flex shrink-0 justify-end z-20">
        <IconButton handleClick={ handleClick }>
          <ArrowRight />
        </IconButton>
      </div>
    </div>
  )
}