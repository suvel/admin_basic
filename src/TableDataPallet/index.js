import React, { useContext } from "react";
import "./style.css";
import NoActionPlaceholder from "../NoActionPlaceholder";
import Form from '../Form'
import { TableContext } from '../context/tableContext'

function TableDataPallet() {
  const { selectedTableRow, updateSelectedTableRow } = useContext(TableContext);

  const selectedTableCount = selectedTableRow?.length || 0;

  const handelCallback = () => {
    //clearing the selection
    updateSelectedTableRow([]);
  }

  return (
    <div className="TableDataPallet">
      <div className="TableDataPallet_rowCount">
        Total Rows:{selectedTableCount}
      </div>
      {
        selectedTableCount > 0 ? (
          <Form onCancelClick={handelCallback} />
        ) : (
          <NoActionPlaceholder />
        )
      }
    </div>
  );
}

export default TableDataPallet;
