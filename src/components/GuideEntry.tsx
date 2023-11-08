import { twMerge } from 'tailwind-merge'
import { icons } from "../assets/widgets/Icons"
import TooltipWrapper from './TooltipWrapper'

type Props = {
  icon?: string,
  title: string,
  url: string,
  className?: string,
  image?: string,
}

export default function GuideEntry({ icon, title, url, className, image, ...props }: Props) {

  return (
    <TooltipWrapper content={title}>
      <a target='_blank' href={url} {...props} className={twMerge("flex flex-shrink-0 items-center hover:bg-btn-hover px-4 h-10 rounded-lg", className)}>
        {(icon && <div className="w-6 mr-6">{icons[icon]}</div>) ||
        (image && <div className="w-6 mr-6"><img className='rounded-full' src={image} /></div>)}
        <div className="flex-1 text-left truncate">{title}</div>
      </a>
    </TooltipWrapper>
  )
}