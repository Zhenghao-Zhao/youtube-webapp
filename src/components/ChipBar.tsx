import { chips as chipArray } from "../assets/static/Data"
import { Arrow } from "../assets/widgets/Icons"
import Chip from "./Chip"
import IconButton from "./IconButton"

export default function ChipBar() {
  const chips = chipArray.map(chip => 
    <Chip title={chip} key={chip} />
  )
  return (
    <div className="relative flex items-center gap-3 text-sm py-2 overflow-hidden">
      { chips }

      <div className="absolute right-0 w-28 h-10 bg-gradient-to-r from-transparent via-white to-white"></div>
      <div className="flex absolute justify-end right-0 z-20">
        <IconButton>
          <Arrow />
        </IconButton>
      </div>
    </div>
  )
}