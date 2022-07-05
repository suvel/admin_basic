import React, { useState, useEffect, useContext } from "react";
import "./style.css";
import TableData from "../TableData";
import TableDataPallet from "../TableDataPallet";
import Separator from "../Separator";
import arrow from "../../asset/arrow.svg";
import TableProvider from "../../context/tableContext";
import memberlistPromise from "../../services/members/member.ls.js";
import { WrkSpaceWinContext } from "../../context/wrkSpaceWinContext";
import { ExceptionContext } from "../../context/exception";
import errorDictionary from "../../content/errorDic";

function Wrkspace() {
  const [tableData, setTableData] = useState([]);
  const { showError } = useContext(ExceptionContext);

  const { windowType, availableWindowTypes, toggleWindowType } =
    useContext(WrkSpaceWinContext);

  useEffect(() => {
    const asynFun = async () => {
      try {
        const memberlist = await memberlistPromise();
        setTableData(memberlist);
      } catch (exp) {
        showError(
          errorDictionary.could_not_fetch.code,
          errorDictionary.could_not_fetch.msg
        );
      }
    };
    asynFun();
  }, []);

  const fullHeightClass =
    availableWindowTypes.WT_FULL == windowType ? "full-height" : "";
  const minHightClass =
    availableWindowTypes.WT_MIN == windowType ? "min-height" : "";

  const toggleFullHeight = () => {
    if (
      availableWindowTypes.WT_MIN == windowType ||
      availableWindowTypes.WT_NORMAL == windowType
    ) {
      toggleWindowType(availableWindowTypes.WT_FULL);
    } else {
      toggleWindowType(availableWindowTypes.WT_NORMAL);
    }
  };

  return (
    <div className={`Wrkspace ${fullHeightClass} ${minHightClass}`}>
      <div onClick={toggleFullHeight} className="Wrkspace_fullscreen_toggler">
        <img src={arrow} />
        <div>FULL SCREEN</div>
      </div>
      <div className="Wrkspace_dataContainer">
        <TableProvider>
          <TableData initialData={tableData} />
          <Separator />
          <TableDataPallet />
        </TableProvider>
      </div>
    </div>
  );
}

export default Wrkspace;
