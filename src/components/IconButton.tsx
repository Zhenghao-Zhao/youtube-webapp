import { twMerge } from 'tailwind-merge'
import { icons } from "../assets/widgets/Icons";
import { IconType } from '../assets/widgets/Icons';

type Props = {
  icon: IconType;
  name?: string;
  className?: string;
  tip?:string;
  handleClick?: () => void;
}

export default function IconButton({ icon, className, name, handleClick, ...props }: Props) {
  return (
    <button {...props} onClick={ handleClick } className={twMerge("flex flex-shrink-0 relative items-center hover:bg-btn-hover rounded-full p-2", className)}>
      <div className="w-6">{ icons[icon] }</div>
      {name && <p>{name}</p>}
    </button>  
  )
}