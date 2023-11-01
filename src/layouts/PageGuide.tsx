import { twMerge } from "tailwind-merge"
import { GuideSections } from "../assets/static/Data"
import { useMemo } from "react";
import GuideSection from "../components/GuideSection";

type Props = {
  className?: string;
}

export default function PageGuide({ className }: Props) {
  console.log("pageguide")
  const sections = useMemo(() => {
    return GuideSections.map(section => <GuideSection title={section.title} data={section.data} icon={section.icon} />)
  }, [GuideSections])

  return (
    <section className={twMerge(`hidden scrollbar-hidden flex-col items-center w-guide-normal fixed top-14 bottom-0 overflow-y-scroll text-sm bg-white`, className)}>
      {sections}
      <div className="guide-section !border-none">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, molestiae minima! Quod quas laboriosam molestias fugiat. Voluptates nesciunt optio placeat.
      </div>
    </section>
  )
}