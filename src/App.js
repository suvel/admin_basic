import './App.css';
import Intro from './components/Intro';
import Wrkspace from './components/Wrkspace';
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
