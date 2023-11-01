import { GuideSectionType } from "../assets/static/Data"
import { icons } from "../assets/widgets/Icons"
import GuideEntry from "./GuideEntry"

export default function GuideSection({ title, data, icon }: GuideSectionType) {
  return (
    <div className="w-full flex flex-col border-b border-solid px-2 py-2 ">
      <div className="flex items-center px-4">
        {title && <p className="font-semibold text-[16px] py-2">{title}</p>}
        {icon && <div className="w-5 ml-2">{ icons[icon] }</div>}
      </div>
      <div>
        {data.map(d => <GuideEntry icon={d.icon} title={d.name} url={d.url}/>)}
      </div>
    </div>
  )
}