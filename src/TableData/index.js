import React from 'react'
import './style.css'
import Searchbox from '../Searchbox'
import Table from '../Table'
import Pagination from '../Pagination'

function TableData() {
    return (
        <div className='TableData' >
            <div className="TableData_searchbox_container">
                <Searchbox />
            </div>
            <Table data={[
                {
                    "id": "1",
                    "name": "Aaron Miles",
                    "email": "aaron@mailinator.com",
                    "role": "member"
                },
                {
                    "id": "2",
                    "name": "Aishwarya Naik",
                    "email": "aishwarya@mailinator.com",
                    "role": "member"
                },
                {
                    "id": "3",
                    "name": "Arvind Kumar",
                    "email": "arvind@mailinator.com",
                    "role": "admin"
                }
            ]} />
            <Pagination />
        </div>
    )
}

export default TableData