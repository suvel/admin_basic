import { createContext, useState } from "react";

export const TableContext = createContext({});

const TableContextProvider = TableContext.Provider;

const initialTableData = [];

const Provider = (props) => {
  const [selectedTableRow, setSelectedTableRow] = useState(initialTableData);
  const [tableData, setTableData] = useState(initialTableData);

  return (
    <TableContextProvider
      value={{
        selectedTableRow,
        updateSelectedTableRow: setSelectedTableRow,
        tableData,
        updateTableData: setTableData,
      }}
    >
      {" "}
      {props.children}
    </TableContextProvider>
  );
};

export default Provider;
