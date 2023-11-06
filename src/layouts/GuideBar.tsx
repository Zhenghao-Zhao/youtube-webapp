import { twMerge } from "tailwind-merge"
import { GuideSectionType } from "../assets/static/Data"
import { useMemo } from "react";
import GuideSection from "../components/GuideSection";

type Props = {
  className?: string;
  GuideSections: GuideSectionType[];
}

export default function GuideBar({ className, GuideSections }: Props) {
  const sections = useMemo(() => {
    return GuideSections.map((section, i) => <GuideSection key={i} title={section.title} data={section.data} icon={section.icon} collapse={section.collapse} />)
  }, [GuideSections])

  return (
    <section className={twMerge(`hidden scrollbar-hidden flex-col items-center w-guide-normal fixed top-14 bottom-0 overflow-y-scroll text-sm bg-white`, className)}>
      {sections}
      <div className="guide-section !border-none p-4 !pb-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, molestiae minima! Quod quas laboriosam molestias fugiat. Voluptates nesciunt optio placeat.
      </div>
    </section>
  )
}