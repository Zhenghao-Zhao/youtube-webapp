import { ReactNode } from "react";

type Props = {
  children: ReactNode,
  title: string,
}

export default function GuideEntry({ children, title, ...props }: Props) {
  return (
    <button {...props} className="flex flex-shrink-0 items-center w-full gap-4 hover:bg-btn-hover pl-2 py-2 rounded-lg">
      <div className="w-6">{ children }</div>
      <span className="text-sm">{ title }</span>
    </button>
  )
}