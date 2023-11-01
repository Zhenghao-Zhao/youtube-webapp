import { GuideTypes } from "../assets/static/types";
import MiniGuideEntry from "../components/MiniGuideEntry"
import { useGuidebarContext } from "../contexts/GuidebarContextProvider";

export default function MiniGuide() {
  const { guideLayout } = useGuidebarContext();
  console.log("miniguide");
  return (
    <section className={`smGb:max-lgGb:flex max-smGb:hidden ${guideLayout===GuideTypes.Mini? "lgGb:flex":"lgGb:hidden"} 
    flex-col items-center w-guide-small fixed top-14 bottom-0 text-[10px] px-1`}>
      <MiniGuideEntry icon="Home" title="Home" />
      <MiniGuideEntry icon="Shorts" title="Shorts" />
      <MiniGuideEntry icon="Subscription" title="Subscription" />
      <MiniGuideEntry icon="Library" title="Library" />
    </section>
  )
}