import React, { useState, useEffect } from 'react'
import './style.css'

function Table({ data, onRowSelection = () => { }, selectedRow: selectedRows = [] }) {

  const [tableData, setTableData] = useState(selectedRows);
  const [isAllSelected, setIsAllSelected] = useState(false);


  const onSelectionChange = (event, id) => {
    const isChecked = event.target.checked
    //selected all 
    if (isChecked == true && id == "all") {
      console.log('selected all')
      onRowSelection(data)
      setIsAllSelected(true)
    }
    //unselected all
    if (isChecked == false && id == "all") {
      console.log('unselected all')
      onRowSelection([])
      setIsAllSelected(false)
    }
    //select one
    if (isChecked == true && (id && id != "all")) {
      console.log('selected ONE')
      const selRow = data.find(item => item.id == id);
      const newSlectedRow = [...selectedRows,selRow];
      onRowSelection(newSlectedRow);
    }
    //unselect one
    if (isChecked == false && (id && id != "all")) {
      console.log('unselected one')
      const newSlectedRow = data.filter(item => item.id != id)
      onRowSelection(newSlectedRow);
      setIsAllSelected(false)
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
  }, [selectedRows, data])

  const getRow = (row) => {
    if (row?.length > 0) {
      return tableData.map(dObj => {
        return (
          <tr key={dObj?.id}>
            <td><input  checked={dObj.isSelected} type="checkbox" onChange={(e) => onSelectionChange(e, dObj.id)} /></td>
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
            <th><input checked={isAllSelected}  type="checkbox" onChange={(e) => onSelectionChange(e, "all")} /></th>
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