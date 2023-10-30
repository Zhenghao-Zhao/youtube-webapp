import PageHeader from './layouts/PageHeader';
import PageBody from './layouts/PageBody';
import { useState, useRef, useEffect } from 'react'
import OverlayGuide from './layouts/OverlayGuide';
import Backdrop from './components/Backdrop';
import { GuideTypes } from './assets/static/types';
import GuideLayout from './layouts/GuideLayout';
import GuidebarContextProvider, { GuidebarContext, useGuidebarContext } from './contexts/GuidebarContextProvider';
import MiniGuide from './layouts/MiniGuide';
import PageGuide from './layouts/PageGuide';

function App() {
  const { guideLayout, showOverlay } = useGuidebarContext();
  return (
    <div className={`font-roboto`}>
      <div className={`absolute inset-0 ${showOverlay && "overflow-hidden"}`}>
        <PageHeader />
        <MiniGuide />
        <PageGuide className={guideLayout===GuideTypes.Regular? "min-[1312px]:flex":"min-[1312px]:hidden"}  />
        <OverlayGuide />
        <PageBody />
      </div>
      <Backdrop />
    </div>
  );
}

export default App;
