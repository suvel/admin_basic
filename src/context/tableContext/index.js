import { createContext, useState } from 'react'

export const TableContext = createContext({});

const TableContextProvider = TableContext.Provider;

const initialTableData = []

const Provider = (props) => {

    const [selectedTableRow, setSelectedTableRow] = useState(initialTableData);

    return (<TableContextProvider
        value={{
            selectedTableRow, updateSelectedTableRow: setSelectedTableRow
        }}
    > {props.children}</TableContextProvider >)
}

export default Provider;
