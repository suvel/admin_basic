import React, { useEffect } from "react";
import "./style.css";
import useTableRowSelector from "./hook/useTableRowSelector.js";

const selectedRowsDefaultValue = [];
const dataDefaultValue = [];
const onRowSelectionDefaultValue = () => {};

function Table({
  data = dataDefaultValue,
  onRowSelection = onRowSelectionDefaultValue,
  selectedRows = selectedRowsDefaultValue,
  selectable = false,
}) {
  const { tableData, isAllSelected, onSelectionChange } = useTableRowSelector(
    data,
    selectedRows,
    onRowSelection,
    selectable
  );

  const getRow = (row) => {
    if (row?.length > 0) {
      return tableData.map((dObj) => {
        return (
          <tr key={dObj?.id}>
            {selectable && (
              <td>
                <input
                  checked={dObj.isSelected}
                  type="checkbox"
                  onChange={(e) => onSelectionChange(e, dObj.id)}
                />
              </td>
            )}
            <td>{dObj?.name}</td>
            <td>{dObj?.email}</td>
            <td>{dObj?.role}</td>
          </tr>
        );
      });
    } else
      return (
        <tr>
          <td colSpan={4}>There no record to show</td>
        </tr>
      );
  };

  return (
    <div className="Table">
      <table>
        <thead>
          <tr>
            {selectable && (
              <th>
                <input
                  checked={isAllSelected}
                  type="checkbox"
                  onChange={(e) => onSelectionChange(e, "all")}
                />
              </th>
            )}
            <th>name</th>
            <th>email</th>
            <th>role</th>
          </tr>
        </thead>
        <tbody>{getRow(data)}</tbody>
      </table>
    </div>
  );
}

export default Table;
