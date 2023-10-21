import { useRef } from "react"

type Prop = {
  title: string;
  onSelect: () => void;
  selectedChip: string;
}

export default function Chip({ title, onSelect, selectedChip}: Prop) {
  const ref = useRef<HTMLButtonElement>(null);
  const handleClick = () => {
    onSelect();
  }
  return (
    <button onClick={ handleClick } ref={ref} className={`flex-shrink-0 px-2 py-1.5 rounded-md ${selectedChip === title? "bg-black text-white" : "hover:bg-btn-hover bg-btn-primary"}`}>
      { title }
    </button>
  )
}