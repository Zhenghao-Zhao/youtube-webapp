import PageHeader from './layouts/PageHeader';
import PageBody from './layouts/PageBody';
import PageGuide from './layouts/PageGuide';
import MiniGuide from './layouts/MiniGuide';
import { useState } from 'react'
import OverlayGuide from './layouts/OverlayGuide';

function App() {
  const [showMiniGuide, setShowMiniGuide] = useState<boolean>(false);
  const [showOverlayGuide, setShowOverlayGuide] = useState<boolean>(false);

  const toggleGuide = () => {
    // setShowMiniGuide(prev => !prev);
    setShowOverlayGuide(prev => !prev);
  }

  const toggleOverlay = () => {
    setShowOverlayGuide(prev => !prev);
  }

  return (
    <div className={`font-roboto ${showOverlayGuide && "fixed inset-0 overflow-y-scroll"}`}>
      <div className={`absolute inset-0 ${showOverlayGuide && "overflow-hidden"}`}>
        <PageHeader toggleGuide={ toggleGuide }/>
        {showMiniGuide? <MiniGuide /> : <PageGuide />}
        {showOverlayGuide && <OverlayGuide toggleOverlay={ toggleOverlay } />}
        <PageBody showMiniGuide={showMiniGuide} />
      </div>
    </div>
  );
}

export default App;
