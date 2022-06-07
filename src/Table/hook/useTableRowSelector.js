import { useState, useEffect, useCallback } from 'react'

const useTableRowSelector = (data, selectedRows, updateSelectedRows, selectable) => {
    const [tableData, setTableData] = useState([]);
    const [isAllSelected, setIsAllSelected] = useState(false);

    const toggleAllSelection = useCallback((currentData) => {
        if (selectedRows.length == currentData.length && isAllSelected == false) {
            setIsAllSelected(true)
        }
        else if (isAllSelected == true && (
            currentData.length == 0 || selectedRows.length != currentData.length
        )) {
            setIsAllSelected(false)
        }
    }, [selectedRows])


    
    useEffect(() => {
        const isRowSelected = (id) => {
            return selectedRows.some(item => item.id == id)
        }

        const newTableData = data.map(item => {
            const newItem = { ...item, isSelected: isRowSelected(item.id) }
            return newItem;
        })
        setTableData(newTableData);

        if (!selectable) {
            return;
        }
        else {
            toggleAllSelection(data)
        }

    }, [selectedRows, data, selectable])

    const onSelectionChange = (event, id) => {
        const isChecked = event.target.checked
        //selected all 
        if (isChecked == true && id == "all" && isAllSelected == false) {
            console.log('selected all')
            updateSelectedRows(data)
            setIsAllSelected(true)
        }
        //unselected all
        else if (isChecked == false && id == "all" && isAllSelected == true) {
            console.log('unselected all')
            updateSelectedRows([])
            setIsAllSelected(false)
        }
        //select one
        else if (isChecked == true && (id && id != "all")) {
            console.log('selected ONE')
            const selRow = data.find(item => item.id == id);
            const newSelectedRow = [...selectedRows, selRow];
            updateSelectedRows(newSelectedRow);
            //when unselecting one, if all is selected, unselect all
            toggleAllSelection(newSelectedRow)
        }
        //unselect one
        else if (isChecked == false && (id && id != "all")) {
            console.log('unselected one')
            const newSelectedRow = selectedRows.filter(item => item.id != id)
            updateSelectedRows(newSelectedRow);
            //when unselecting one, if all is selected, unselect all
            toggleAllSelection(newSelectedRow)
        }
    }

    return { tableData, isAllSelected, onSelectionChange }
}

export default useTableRowSelector;