import './App.css';
import Intro from './Intro';
import Wrkspace from './Wrkspace';
import WrkSpaceWinProvider from './context/wrkSpaceWinContext'

function App() {
  return (
    <div className="App">
      <WrkSpaceWinProvider>
        <Intro />
        <Wrkspace />
      </WrkSpaceWinProvider>
    </div>
  );
}

export default App;
