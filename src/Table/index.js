import React from 'react'
import './style.css'

function Table({ data }) {

  const getRow = (row) => {
    if (row?.length > 0) {
      return data.map(dObj => {
        return (
          <tr key={dObj?.id}>
            <td><input type="checkbox" /></td>
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
            <th>{" "}</th>
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