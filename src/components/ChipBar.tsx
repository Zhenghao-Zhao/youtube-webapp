import { chips as chipArray } from "../assets/static/Data"
import Chip from "../assets/widgets/Chip"
import { useRef, useState } from 'react'
import ArrowButton from "./ArrowButton"

export default function ChipBar() {
  const listRef = useRef<HTMLDivElement>(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const chips = chipArray.map(chip => 
    <Chip title={chip} key={chip} />
  )

  const handleLeftClick = () => {
    const element = listRef.current!;

    if (element.scrollLeft < 400) {
      element.scrollLeft = 0;
      setShowLeft(false);
      return;
    }
    element.scrollLeft -= 200;
    setShowRight(true);
  }

  const handleRightClick = () => {
    const element = listRef.current!;
    const maxScrollLeft = element.scrollWidth - element.clientWidth;

    if (maxScrollLeft - element.scrollLeft < 400) {
      element.scrollLeft += maxScrollLeft - element.scrollLeft;
      setShowRight(false);
      return;
    }
    element.scrollLeft += 200;
    setShowLeft(true);
  }

  return (
    <div className="relative flex items-center">
      <ArrowButton handleClick={handleLeftClick} className={`rotate-180 left-0 ${showLeft? "flex" : "hidden"}`}/>
      <div ref={listRef} className="overflow-hidden flex items-center h-10 scroll-smooth gap-3 text-sm">
        { chips }
      </div>
      <ArrowButton handleClick={handleRightClick} className={`${showRight? "flex" : "hidden"}`} />
    </div>
  )
}