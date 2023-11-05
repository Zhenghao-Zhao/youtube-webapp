import {twMerge} from 'tailwind-merge'

type Props = {
  tip?: string;
  className?: string;
  children: React.ReactNode;
}

export default function Tooltip({ tip, className, children, ...props} : Props) {
  return (
    <div className={twMerge('bg-tooltip text-white absolute z-[1000] -bottom-6 text-center text-xs p-1', className)}>
      {tip}
    </div>
  )
}