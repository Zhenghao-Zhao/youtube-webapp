import { chips as chipArray } from "../assets/static/Data"
import Chip from "./Chip"

export default function ChipBar() {
  const chips = chipArray.map(chip => 
    <Chip title={chip} key={chip} />
  )
  return (
    <div className="flex gap-3 ">
      { chips }
    </div>
  )
}