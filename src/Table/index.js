import React, { useState, useEffect, useCallback } from 'react'
import './style.css'

function Table({ data, onRowSelection = () => { }, selectedRow: selectedRows = [] }) {

  const [tableData, setTableData] = useState(selectedRows);
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

  const onSelectionChange = (event, id) => {
    const isChecked = event.target.checked
    //selected all 
    if (isChecked == true && id == "all" && isAllSelected == false) {
      console.log('selected all')
      onRowSelection(data)
      setIsAllSelected(true)
    }
    //unselected all
    else if (isChecked == false && id == "all" && isAllSelected == true) {
      console.log('unselected all')
      onRowSelection([])
      setIsAllSelected(false)
    }
    //select one
    else if (isChecked == true && (id && id != "all")) {
      console.log('selected ONE')
      const selRow = data.find(item => item.id == id);
      const newSelectedRow = [...selectedRows, selRow];
      onRowSelection(newSelectedRow);
      //when unselecting one, if all is selected, unselect all
      toggleAllSelection(newSelectedRow)
    }
    //unselect one
    else if (isChecked == false && (id && id != "all")) {
      console.log('unselected one')
      const newSelectedRow = selectedRows.filter(item => item.id != id)
      onRowSelection(newSelectedRow);
      //when unselecting one, if all is selected, unselect all
      toggleAllSelection(newSelectedRow)
    }
  }

  useEffect(() => {
    const isRowSelected = (id) => {
      return selectedRows.some(item => item.id == id)
    }

    const newTableData = data.map(item => {
      const newItem = { ...item, isSelected: isRowSelected(item.id) }
      return newItem;
    })
    setTableData(newTableData);

    toggleAllSelection(data)

  }, [selectedRows, data])

  const getRow = (row) => {
    if (row?.length > 0) {
      return tableData.map(dObj => {
        return (
          <tr key={dObj?.id}>
            <td><input checked={dObj.isSelected} type="checkbox" onChange={(e) => onSelectionChange(e, dObj.id)} /></td>
            <td>{dObj?.name}</td>
            <td>{dObj?.email}</td>
            <td>{dObj?.role}</td>
          </tr>
        )
      })
    }
    else
      return (<tr>
        <td colSpan={4}>There no record to show</td>
      </tr>)
  }

  return (
    <div className='Table'>
      <table>
        <thead>
          <tr>
            <th><input checked={isAllSelected} type="checkbox" onChange={(e) => onSelectionChange(e, "all")} /></th>
            <th>name</th>
            <th>email</th>
            <th>role</th>
          </tr>
        </thead>
        <tbody>
          {
            getRow(data)
          }
        </tbody>
      </table>
    </div>
  )
}

export default Table