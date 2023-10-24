import { ReactNode } from "react";
import { twMerge } from 'tailwind-merge'

type Props = {
  children: ReactNode,
  title: string,
  className?: string
}

export default function GuideEntry({ children, title, className, ...props }: Props) {
  return (
    <button {...props} className={twMerge("flex flex-shrink-0 items-center w-full gap-4 hover:bg-btn-hover pl-4 py-2 rounded-lg", className)}>
      <div className="w-6">{ children }</div>
      <span>{ title }</span>
    </button>
  )
}