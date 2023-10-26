import { ReactNode } from "react";
import { twMerge } from 'tailwind-merge'

type Props = {
  children: ReactNode,
  title: string,
  className?: string
}

export default function GuideEntry({ children, title, className, ...props }: Props) {
  return (
    <button {...props} className={twMerge("flex flex-shrink-0 items-center hover:bg-btn-hover px-4 h-10 rounded-lg", className)}>
      <div className="w-6 mr-6">{ children }</div>
      <div className="flex-1 text-left">{ title }</div>
    </button>
  )
}