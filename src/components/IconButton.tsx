import { twMerge } from 'tailwind-merge'
import { icons } from "../assets/widgets/Icons";
import { IconType } from '../assets/widgets/Icons';
import TooltipWrapper from './TooltipWrapper';

type Props = {
  icon: IconType;
  name?: string;
  tip?: string;
  className?: string;
  handleClick?: () => void;
}

export default function IconButton({ icon, className, name, tip, handleClick, ...props }: Props) {
  const content = (
    <button {...props} onClick={ handleClick } className={twMerge("flex flex-shrink-0 items-center hover:bg-btn-hover rounded-full p-2", className)}>
      <div className="w-6">{ icons[icon] }</div>
      {name && <p>{name}</p>}
    </button>  
  )
  if (tip) {
    return (
      <TooltipWrapper content={tip}>
        {content}
      </TooltipWrapper>
    )
  }
  return content;
}