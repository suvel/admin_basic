import React from "react";
import "./style.css";
import NoActionPlaceholder from "../NoActionPlaceholder";
import Form from '../Form'

function TableDataPallet() {
  return (
    <div className="TableDataPallet">
      <div className="TableDataPallet_rowCount">Total Rows: 3</div>
      {/* <NoActionPlaceholder /> */}
      <Form />
    </div>
  );
}

export default TableDataPallet;
