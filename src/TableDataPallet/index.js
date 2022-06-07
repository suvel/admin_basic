import React, { useContext, useMemo } from "react";
import "./style.css";
import NoActionPlaceholder from "../NoActionPlaceholder";
import Form from '../Form'
import { TableContext } from '../context/tableContext'
import MultiRowAction from "../MultiRowAction";

function TableDataPallet() {
  const { selectedTableRow, updateSelectedTableRow } = useContext(TableContext);

  const selectedTableCount = selectedTableRow?.length || 0;

  const handelCallback = () => {
    //clearing the selection
    updateSelectedTableRow([]);
  }

  const getWidget = useMemo(() => {
    if (selectedTableCount > 1) return <MultiRowAction />
    else if (selectedTableCount == 1) return <Form data={selectedTableRow[0]} onCancelClick={handelCallback} />
    else return <NoActionPlaceholder />
  }, [selectedTableCount])

  return (
    <div className="TableDataPallet">
      <div className="TableDataPallet_rowCount">
        Total Rows:{selectedTableCount}
      </div>
      {
        getWidget
      }
    </div>
  );
}

export default TableDataPallet;
