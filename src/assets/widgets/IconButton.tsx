import { twMerge } from 'tailwind-merge'
import { icons } from "../static/Icons";
import { IconType } from '../static/Icons';
import { TooltipWrapper } from '../../components/TooltipWrapper';

type Props = {
  icon: IconType;
  name?: string;
  tip?: string;
  className?: string;
  handleClick?: () => void;
}

export default function IconButton({ icon, className, name, tip, handleClick }: Props) {
  const content = (
    <button title={name} onClick={ handleClick } className={twMerge("flex flex-shrink-0 items-center hover:bg-btn-hover rounded-full p-2", className)}>
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