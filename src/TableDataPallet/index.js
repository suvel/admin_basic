import React, { useContext, useMemo } from "react";
import "./style.css";
import NoActionPlaceholder from "../NoActionPlaceholder";
import Form from '../Form'
import { TableContext } from '../context/tableContext'
import MultiRowAction from "../MultiRowAction";

function TableDataPallet() {
  const {
    selectedTableRow,
    updateSelectedTableRow,
    updateTableData
  } = useContext(TableContext);

  const selectedTableCount = selectedTableRow?.length || 0;

  const handelCancelCallback = () => {
    //clearing the selection
    updateSelectedTableRow([]);
  }

  const handelDeleteCallback = (memberIds) => {
    //clearing the member from the table
    updateTableData(currentTableData => {
      return currentTableData.filter(member => {
        return !memberIds.includes(member.id);
      })
    });
    updateSelectedTableRow([]);
  }

  const getWidget = useMemo(() => {
    if (selectedTableCount > 1) return <MultiRowAction onCancelClick={handelCancelCallback} />
    else if (selectedTableCount == 1) return (
      <Form data={selectedTableRow[0]}
        onCancelClick={handelCancelCallback}
        onDeleteClick={handelDeleteCallback} />
    )
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
