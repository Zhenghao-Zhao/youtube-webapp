import { ReactNode } from "react";
import { twMerge } from 'tailwind-merge'

type Props = {
  children: ReactNode;
  className?: string;
  handleClick?: () => void;
}

export default function IconButton({ children, className, handleClick, ...props }: Props) {
  return (
    <button {...props} onClick={ handleClick } className={twMerge("flex flex-shrink-0 hover:bg-btn-hover rounded-full p-2", className)}>
      <div className="w-6">{ children }</div>
    </button>  
  )
}