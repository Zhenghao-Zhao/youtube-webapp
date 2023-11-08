import { useTooltipContext } from "../contexts/TooltipContextProvider";
import { twMerge } from "tailwind-merge"

type Props = {
  className?: string;
}

export default function Tooltip({ className }: Props) {
  const { position, content, showTooltip} = useTooltipContext();

  let style = position? {
    left: position.x + 'px',
    top: position.y + 'px',
  } : {};

  return (
    <div style={ style } className={twMerge(`${!showTooltip && 'hidden'} absolute text-white text-xs bg-tooltip p-1 w-fit z-[1002]`, className)}>
      <p>{ content }</p>
    </div>
  )
}