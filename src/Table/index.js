import React from 'react'
import './style.css'
import useTableRowSelector from './hook/useTableRowSelector.js'

function Table({ data, onRowSelection = () => { }, selectedRow: selectedRows = [] }) {

  const { tableData, isAllSelected, onSelectionChange } = useTableRowSelector(data, selectedRows, onRowSelection)

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