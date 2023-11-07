import { useMemo, useState } from "react";
import { GuideSectionType } from "../assets/static/Data"
import { IconType, icons } from "../assets/widgets/Icons"
import GuideEntry from "./GuideEntry"
import IconButton from "./IconButton";
import TooltipWrapper from "./TooltipWrapper";

export default function GuideSection({ title, data, icon, collapse=data.length }: GuideSectionType) {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);

  const handleClick = () => {
    setIsCollapsed(prev => !prev);
  }

  const openEntries = useMemo(() => {
    return data.reduce<JSX.Element[]>((rst, curr, i) => {
      if (i < collapse) {
        rst.push(
        <TooltipWrapper key={i} content={curr.name}>
          <GuideEntry icon={curr.icon} title={curr.name} url={curr.url} image={curr.image} />
        </TooltipWrapper>
        );
      }
      return rst;
    }, [])
  }, [collapse, data])

  const collapsedEntries = useMemo(() => {
    const rtn = collapse >= data.length? null : 
    data.reduce<JSX.Element[]>((rst, curr, i) => {
      if (i >= collapse) {
        rst.push(
          <TooltipWrapper key={i} content={curr.name}>
            <GuideEntry icon={curr.icon} title={curr.name} url={curr.url} image={curr.image} />
          </TooltipWrapper>
        )
      }
      return rst;
    }, [])
    return rtn;
  }, [collapse, data])


  const collapseButton = collapse >= data.length? null : isCollapsed? 
  <IconButton icon={IconType.ArrowDown} className="rounded-lg px-4 gap-6" name={`Show More`} handleClick={handleClick}/> :
  <IconButton icon={IconType.ArrowUp} className="rounded-lg px-4 gap-6" name={`Show Fewer`} handleClick={handleClick}/>

  return (
    <div className="w-full flex flex-col border-b border-solid px-2 py-2 ">
      <div className="flex items-center px-4">
        {title && <p className="font-semibold text-[16px] py-2">{title}</p>}
        {icon && <div className="w-5 ml-2">{ icons[icon] }</div>}
      </div>
      {openEntries}
      {!isCollapsed && collapsedEntries}
      {collapseButton}
    </div>
  )
}