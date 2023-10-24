import PageHeader from './layouts/PageHeader';
import PageBody from './layouts/PageBody';
import PageGuide from './layouts/PageGuide';
import MiniGuide from './layouts/MiniGuide';
import { useState } from 'react'

function App() {
  const [showMiniGuide, setShowMiniGuide] = useState(false);

  const toggleGuide = () => {
    setShowMiniGuide(prev => !prev);
  }

  return (
    <div className="App font-roboto">
      <PageHeader toggleGuide={toggleGuide}/>
      {showMiniGuide? <MiniGuide /> : <PageGuide />}
      <PageBody showMiniGuide={showMiniGuide} />
    </div>
  );
}

export default App;
