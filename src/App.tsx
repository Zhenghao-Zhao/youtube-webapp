import PageHeader from './layouts/PageHeader';
import PageBody from './layouts/PageBody';
import OverlayGuide from './layouts/OverlayGuide';
import Backdrop from './components/Backdrop';
import { GuideTypes } from './assets/static/types';
import { useGuidebarContext } from './contexts/GuidebarContextProvider';
import MiniGuide from './layouts/MiniGuide';
import GuideBar from './layouts/GuideBar';
import { GuideSections } from './assets/static/Data';
import Tooltip from './components/Tooltip';
import { useTooltipContext } from './contexts/TooltipContextProvider';

function App() {
  const { guideLayout, showOverlay } = useGuidebarContext();
  const { showTooltip } = useTooltipContext();
  return (
    <div className={`font-roboto`}>
      <div className={`absolute inset-0 ${showOverlay && "overflow-hidden"}`}>
        <PageHeader />
        <MiniGuide />
        <GuideBar className={guideLayout===GuideTypes.Regular? "lgGb:flex":"lgGb:hidden"} GuideSections={GuideSections}  />
        <OverlayGuide />
        <PageBody />
      </div>
      <Backdrop />
      <Tooltip />
    </div>
  );
}

export default App;
