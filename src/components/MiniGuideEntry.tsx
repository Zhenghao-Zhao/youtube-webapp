import { ReactNode } from "react"
import { IconType, icons } from "../assets/widgets/Icons";

type Props = {
  icon: IconType;
  title: string,
}

export default function MiniGuideEntry({ icon, title, ...props }: Props) {
  return (
    <button className="flex flex-col w-16 py-5 justify-center items-center rounded-lg hover:bg-btn-hover">
      <div className="w-6 mb-[6px]">{ icons[icon] }</div>
      { title }
    </button>
  )
}