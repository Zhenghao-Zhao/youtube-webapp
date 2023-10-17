import { ReactNode } from "react";
import { twMerge } from 'tailwind-merge'

type Props = {
  children: ReactNode,
  className?: string
}

export default function IconButton({ children, className, ...props }: Props) {
  return (
    <button {...props} className={twMerge("flex flex-shrink-0 hover:bg-btn-hover rounded-full p-2", className)}>
      <div className="w-6">{ children }</div>
    </button>  
  )
}