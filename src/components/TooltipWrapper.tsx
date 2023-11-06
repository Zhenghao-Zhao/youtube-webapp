import { useCallback, useEffect, useRef, useState } from 'react';
import {twMerge} from 'tailwind-merge'
import Tooltip from './Tooltip';

type Props = {
  tip?: string;
  className?: string;
  children: React.ReactNode;
}


export type Position = {
  x: number,
  y: number,
}

export default function TooltipWrapper({ tip, className, children, ...props} : Props) {
  const [show, setShow] = useState<boolean>(false);
  const [position, setPosition] = useState<Position>({x: 0, y: 0});
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    setShow(false);
    setTimeout(() => {
      const rect = ref.current!.getBoundingClientRect();
      const x = e.clientX - rect.x + 10;
      const y = e.clientY - rect.y + 20;
      setPosition({x, y});
      setShow(true);
    })
  }

  return (
    <div ref={ref} className={twMerge('relative', className)} onMouseMove={handleMouseEnter} onMouseLeave={() => setShow(false)}>
      {children}
      {show &&
        <Tooltip content={tip} position={position}/>
      }
    </div>
  )
}