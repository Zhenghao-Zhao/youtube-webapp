import PageHeader from './layouts/PageHeader';
import PageBody from './layouts/PageBody';
import PageGuide from './layouts/PageGuide';

function App() {
  return (
    <div className="App font-roboto">
      <PageHeader />
      <PageGuide />
      <PageBody />
    </div>
  );
}

export default App;
