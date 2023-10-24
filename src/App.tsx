import PageHeader from './layouts/PageHeader';
import PageBody from './layouts/PageBody';
import PageGuide from './layouts/PageGuide';
import MiniGuide from './layouts/MiniGuide';
import { useState } from 'react'
import OverlayGuide from './layouts/OverlayGuide';

function App() {
  const [showMiniGuide, setShowMiniGuide] = useState<boolean>(false);
  const [showOverlayGuide, setShowOverlayGuide] = useState<boolean>(true);

  const toggleGuide = () => {
    setShowMiniGuide(prev => !prev);
  }

  const toggleOverlay = () => {
    setShowOverlayGuide(prev => !prev);
  }

  return (
    <div className="App font-roboto">
      <PageHeader toggleGuide={toggleGuide}/>
      {showMiniGuide? <MiniGuide /> : <PageGuide />}
      {showOverlayGuide && <OverlayGuide toggleOverlay={ toggleOverlay } />}
      <PageBody showMiniGuide={showMiniGuide} />
    </div>
  );
}

export default App;
