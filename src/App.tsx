import PageHeader from './layouts/PageHeader';
import PageBody from './layouts/PageBody';
import { useState, useRef, useEffect } from 'react'
import OverlayGuide from './layouts/OverlayGuide';
import Backdrop from './components/Backdrop';
import { GuideTypes } from './assets/static/types';
import GuideLayout from './layouts/GuideLayout';

function App() {
  const [guideLayout, setGuideLayout] = useState<GuideTypes | null>(0); // 0: mini guide; 1: regular guide
  const [showOverlay, setShowOverlay] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  const large = window.matchMedia('(max-width: 1312px');
  const small = window.matchMedia('(max-width: 792px');

  useEffect(() => {
    large.addEventListener('change', updateLargeScreen)
    small.addEventListener('change', updateSmallScreen);
    return () => {
      large.removeEventListener('change', updateLargeScreen);
      small.removeEventListener('change', updateSmallScreen);
    }
  }, [])
  

  const updateLargeScreen = (e: MediaQueryListEvent) => {
    if (e.matches) {
      setGuideLayout(GuideTypes.Mini);
    } else {
      setGuideLayout(GuideTypes.Regular);
    }
  }

  const updateSmallScreen = (e: MediaQueryListEvent) => {
    if (e.matches) {
      setGuideLayout(null);
    } else {
      setGuideLayout(GuideTypes.Mini);
    }
  }

  const toggleGuide = () => {
    if (large.matches) {
      setShowOverlay(true);
    } else {
      setGuideLayout(prev => 1 - prev!);
    }
  }

  return (
    <div className={`font-roboto`}>
      <div ref={ref} className={`absolute inset-0 ${showOverlay && "overflow-hidden"}`}>
        <PageHeader toggleGuide={ toggleGuide }/>
        <GuideLayout layout={guideLayout} />
        <OverlayGuide toggleOverlay={() => setShowOverlay(false)} show={showOverlay}/>
        <PageBody currentLayout={guideLayout} />
      </div>
      {showOverlay && <Backdrop setShowOverlay={setShowOverlay}/>}
    </div>
  );
}

export default App;
