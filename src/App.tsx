import PageHeader from './layouts/PageHeader';
import PageBody from './layouts/PageBody';
import PageGuide from './layouts/PageGuide';
import MiniGuide from './layouts/MiniGuide';
import { useState, useRef } from 'react'
import OverlayGuide from './layouts/OverlayGuide';

function App() {
  const [showMiniGuide, setShowMiniGuide] = useState<boolean>(false);
  const [showOverlayGuide, setShowOverlayGuide] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  const toggleGuide = () => {
    // setShowMiniGuide(prev => !prev);
    setShowOverlayGuide(prev => !prev);
  }

  const toggleOverlay = () => {
    setShowOverlayGuide(prev => !prev);
  }

  return (
    <div className={`font-roboto`}>
      <div ref={ref} className={`absolute inset-0 ${showOverlayGuide && "overflow-hidden"}`}>
        <PageHeader toggleGuide={ toggleGuide }/>
        {showMiniGuide? <MiniGuide /> : <PageGuide />}
        {showOverlayGuide && <OverlayGuide toggleOverlay={ toggleOverlay } />}
        <PageBody showMiniGuide={showMiniGuide} />
      </div>
    </div>
  );
}

export default App;
