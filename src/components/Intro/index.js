import React, { useContext, useState, useEffect, useRef } from "react";
import "./style.css";
import { WrkSpaceWinContext } from "../../context/wrkSpaceWinContext";
import WelcomeBanner from "../WelcomeBanner";
import AppInfo from "../AppInfo";
import DevInfo from "../DevInfo";
import ShowWorkspaceButton from "../ShowWorkspaceButton";

function Intro() {
  const { windowType, toggleWindowType, availableWindowTypes } =
    useContext(WrkSpaceWinContext);
  const [hideClickableLink, setHideClickableLink] = useState(false);
  const applicationContentContainerRef = useRef(null);

  const handelAdjustingWorkSpaceWind = () => {
    toggleWindowType(availableWindowTypes.WT_MIN);
    setHideClickableLink(true);
  };

  const handelShowingWorkspace = () => {
    toggleWindowType(availableWindowTypes.WT_NORMAL);
    setHideClickableLink(false);
  };

  useEffect(() => {
    if (windowType !== availableWindowTypes.WT_MIN) {
      setHideClickableLink(false);
    }
    if (windowType == availableWindowTypes.WT_MIN) {
      applicationContentContainerRef.current.scrollTop = 0;
    }
  }, [windowType]);

  return (
    <div className="Intro">
      <WelcomeBanner
        onClickableLinkClick={handelAdjustingWorkSpaceWind}
        hideClickableLink={hideClickableLink}
      />
      <div className="application_content" ref={applicationContentContainerRef}>
        <ShowWorkspaceButton showWorkspace={handelShowingWorkspace} />
        <AppInfo />
        <DevInfo />
      </div>
    </div>
  );
}

export default Intro;
