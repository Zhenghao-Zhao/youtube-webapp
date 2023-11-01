import { ReactNode } from "react";
import { twMerge } from 'tailwind-merge'
import { icons } from "../assets/widgets/Icons";

type Props = {
  icon: string;
  className?: string;
  handleClick?: () => void;
}

export default function IconButton({ icon, className, handleClick, ...props }: Props) {
  return (
    <button {...props} onClick={ handleClick } className={twMerge("flex flex-shrink-0 hover:bg-btn-hover rounded-full p-2", className)}>
      <div className="w-6">{ icons[icon] }</div>
    </button>  
  )
}