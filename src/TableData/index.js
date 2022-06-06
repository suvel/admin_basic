import React, { useState } from 'react'
import './style.css'
import Searchbox from '../Searchbox'
import Table from '../Table'
import Pagination from '../Pagination'

function TableData() {

    const [selectedRows, setSelectedRows] = useState([]);

    const onRowSelection = (newSelectedRows) => {
        setSelectedRows(newSelectedRows);
    }

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
                },
                {
                    "id": "10",
                    "name": "Aaron Miles",
                    "email": "aaron@mailinator.com",
                    "role": "member"
                },
                {
                    "id": "20",
                    "name": "Aishwarya Naik",
                    "email": "aishwarya@mailinator.com",
                    "role": "member"
                },
                {
                    "id": "30",
                    "name": "Arvind Kumar",
                    "email": "arvind@mailinator.com",
                    "role": "admin"
                },
                {
                    "id": "100",
                    "name": "Aaron Miles",
                    "email": "aaron@mailinator.com",
                    "role": "member"
                },
                {
                    "id": "200",
                    "name": "Aishwarya Naik",
                    "email": "aishwarya@mailinator.com",
                    "role": "member"
                },
                {
                    "id": "300",
                    "name": "Arvind Kumar",
                    "email": "arvind@mailinator.com",
                    "role": "admin"
                },
                {
                    "id": "1000",
                    "name": "Aaron Miles",
                    "email": "aaron@mailinator.com",
                    "role": "member"
                },
                {
                    "id": "2000",
                    "name": "Aishwarya Naik",
                    "email": "aishwarya@mailinator.com",
                    "role": "member"
                },
                {
                    "id": "3000",
                    "name": "Arvind Kumar",
                    "email": "arvind@mailinator.com",
                    "role": "admin"
                },
                {
                    "id": "10000",
                    "name": "Aaron Miles",
                    "email": "aaron@mailinator.com",
                    "role": "member"
                },
                {
                    "id": "20000",
                    "name": "Aishwarya Naik",
                    "email": "aishwarya@mailinator.com",
                    "role": "member"
                },
                {
                    "id": "30000",
                    "name": "Arvind Kumar",
                    "email": "arvind@mailinator.com",
                    "role": "admin"
                }
            ]}


                selectedRow={selectedRows}
                onRowSelection={onRowSelection}
            />
            <Pagination />
        </div>
    )
}

export default TableData