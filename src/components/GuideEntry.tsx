import { twMerge } from 'tailwind-merge'
import { icons } from "../assets/widgets/Icons"

type Props = {
  icon?: string,
  title: string,
  url: string,
  className?: string,
  // image?: string,
}

export default function GuideEntry({ icon, title, url, className, ...props }: Props) {
  return (
    <a href={url} {...props} className={twMerge("flex flex-shrink-0 items-center hover:bg-btn-hover px-4 h-10 rounded-lg", className)}>
      <div className="w-6 mr-6">{icon && icons[icon]}</div>
      <div className="flex-1 text-left">{title}</div>
    </a>
  )
}