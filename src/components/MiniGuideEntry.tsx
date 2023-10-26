import { ReactNode } from "react"

type Props = {
  children: ReactNode,
  title: string,
}

export default function MiniGuideEntry({ children, title, ...props }: Props) {
  return (
    <button className="flex flex-col w-16 py-5 justify-center items-center rounded-lg hover:bg-btn-hover">
      <div className="w-6 mb-[6px]">{ children }</div>
      { title }
    </button>
  )
}