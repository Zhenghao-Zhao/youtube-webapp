import { chips as chipArray } from "../assets/static/Data"
import Chip from "../assets/widgets/Chip"
import { useEffect, useRef, useState } from 'react'
import ArrowButton from "./ArrowButton"

export default function ChipBar() {
  const listRef = useRef<HTMLDivElement>(null);
  const sizeRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);
  const [selectedChip, setSelectedChip] = useState<string>(chipArray[0]);
  const TRANSLATE_DISTANCE = 200; // 200px per click on arrow button

  useEffect(() => {
    const chipbar = sizeRef.current!;
    const containerObserver = new ResizeObserver(entries => {
      const container = entries[0].target;
      containerRef.current!.style.setProperty('width', '' + container.clientWidth + 'px');
    })

    containerObserver.observe(chipbar);
    const element = listRef.current!;

    const observer = new ResizeObserver(entires => {
      const container = entires[0].target;
      setShowRight(container.scrollWidth > container.clientWidth);
      setShowLeft(container.scrollLeft > 0);
    })
    observer.observe(element);
    return () => {
      observer.disconnect();
    }
  }, [])

  const chips = chipArray.map((chip) => 
      <Chip title={chip} key={chip} onSelect={() => { setSelectedChip(chip) }} selectedChip={selectedChip}/>
  )

  const handleLeftClick = () => {
    setShowRight(true);
    const element = listRef.current!;

    if (element.scrollLeft < 2 * TRANSLATE_DISTANCE) {
      element.scrollLeft = 0;
      return setShowLeft(false);
    }
    element.scrollLeft -= TRANSLATE_DISTANCE;
  }

  const handleRightClick = () => {
    setShowLeft(true);

    const element = listRef.current!;
    const maxScrollLeft = element.scrollWidth - element.clientWidth;

    if (maxScrollLeft - element.scrollLeft < 2 * TRANSLATE_DISTANCE) {
      element.scrollLeft += maxScrollLeft - element.scrollLeft;
      return setShowRight(false);
    } 
    element.scrollLeft += TRANSLATE_DISTANCE;
  }

  return (
    <div ref={sizeRef} className="h-14">
      <div ref={containerRef} className="fixed flex items-center top-14 bg-white h-12">
        {showLeft && <ArrowButton handleClick={handleLeftClick} className="rotate-180 left-0"/>}
        <div ref={listRef} className="overflow-x-hidden flex items-center h-10 scroll-smooth gap-3 text-sm">
          { chips }
        </div>
        {showRight && <ArrowButton handleClick={handleRightClick} />}
      </div>
    </div>
  )
}