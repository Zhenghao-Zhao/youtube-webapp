import { useEffect, useState } from "react"
import { Position } from "./TooltipWrapper";

type Props = {
  content?: string;
  position?: Position
}

export default function Tooltip({ content, position }: Props) {
  const [show, setShow] = useState<boolean>(false);
  useEffect(() => {
    let timeout = setTimeout(() => {
      setShow(true)
    }, 500)
    return () => clearTimeout(timeout);
  }, [])

  let style = position? {
    left: position.x + 'px',
    top: position.y + 'px',
  } : {};

  return (
    <div style={ style } className={`${!show && 'hidden'} absolute text-white text-xs bg-tooltip p-1 w-fit z-[1002]`}>
      <p>{ content }</p>
    </div>
  )
}