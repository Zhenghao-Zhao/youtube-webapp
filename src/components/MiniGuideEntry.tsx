import { IconType } from "../assets/widgets/Icons";
import IconButton from "./IconButton";
import TooltipWrapper from "./TooltipWrapper";

type Props = {
  icon: IconType;
  title: string,
}

export default function MiniGuideEntry({ icon, title }: Props) {
  return (
    <IconButton className="flex-col w-16 py-4 rounded-lg gap-[6px]" icon={icon} name={title} tip={title}/>
  )
}