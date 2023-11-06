import { GuideTypes } from "../assets/static/types";
import { IconType } from "../assets/widgets/Icons";
import MiniGuideEntry from "../components/MiniGuideEntry"
import { useGuidebarContext } from "../contexts/GuidebarContextProvider";

export default function MiniGuide() {
  const { guideLayout } = useGuidebarContext();
  return (
    <section className={`smGb:max-lgGb:flex max-smGb:hidden ${guideLayout===GuideTypes.Mini? "lgGb:flex":"lgGb:hidden"} 
    flex-col items-center w-guide-small fixed top-14 bottom-0 text-[10px] px-1`}>
      <MiniGuideEntry icon={IconType.Home} title="Home" />
      <MiniGuideEntry icon={IconType.Shorts} title="Shorts" />
      <MiniGuideEntry icon={IconType.Subscription} title="Subscription" />
      <MiniGuideEntry icon={IconType.Library} title="Library" />
    </section>
  )
}