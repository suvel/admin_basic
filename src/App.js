import { useEffect, useState, Suspense } from "react";
import "./App.css";
import Intro from "./components/Intro";
import Wrkspace from "./components/Wrkspace";
import WrkSpaceWinProvider from "./context/wrkSpaceWinContext";
import checkInternetIsAvailable from "./services/checkInternet";
import NoInternet from "./components/NoInternet";

function App() {
  const [isOffline, setIsOffline] = useState(false);

  useEffect(() => {
    const chkInterneConnection = async () => {
      try{
        const { havNetworkConnection, msg, error } =
        await checkInternetIsAvailable();
      if (havNetworkConnection) {
        console.log(msg);
        setIsOffline(false);
      }
      }
      catch(exp){
        console.log(exp);
        setIsOffline(true)
      }
    };
    setTimeout(() => {
      chkInterneConnection();
    }, 1000);
  },[]);
  return (
    <div className="App">
      {isOffline ? (
        <NoInternet />
      ) : (
        <WrkSpaceWinProvider>
          <Intro />
          <Wrkspace />
        </WrkSpaceWinProvider>
      )}
    </div>
  );
}

export default App;
