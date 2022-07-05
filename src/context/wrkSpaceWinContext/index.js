import { createContext, useState } from "react";

export const WrkSpaceWinContext = createContext();

const winTypes = {
  WT_FULL: "full",
  WT_MIN: "min",
  WT_NORMAL: "normal",
};

const Provider = ({ children }) => {
  const [winType, setWinType] = useState(winTypes.WT_NORMAL);

  const toggleWinType = (newWinType) => {
    setWinType(newWinType);
  };

  return (
    <WrkSpaceWinContext.Provider
      value={{
        windowType: winType,
        toggleWindowType: toggleWinType,
        availableWindowTypes: winTypes,
      }}
    >
      {children}
    </WrkSpaceWinContext.Provider>
  );
};

export default Provider;
