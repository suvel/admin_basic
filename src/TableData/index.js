import React, { useContext, useState } from 'react'
import './style.css'
import Searchbox from '../Searchbox'
import Table from '../Table'
import Pagination from '../Pagination'
import { TableContext } from '../context/tableContext'

const initialData = [
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
]

function TableData() {
    const [data, SetData] = useState(initialData);
    const { selectedTableRow, updateSelectedTableRow } = useContext(TableContext);

    const handelOnSearchClicked = (searchText) => {

        const handelSearch = () => {
            if (searchText) {
                const searchData = data.filter(item => {
                    return (
                        item.name.toLowerCase().includes(searchText.toLowerCase()) ||
                        item.email.toLowerCase().includes(searchText.toLowerCase()) ||
                        item.role.toLowerCase().includes(searchText.toLowerCase())
                    )
                })
                SetData(searchData)
            }
            else {
                SetData(initialData)
            }
        }

        const clearSelection = () => {
            updateSelectedTableRow([])
        }

        handelSearch();
        clearSelection();

    }

    return (
        <div className='TableData' >
            <div className="TableData_searchbox_container">
                <Searchbox onSearchClicked={handelOnSearchClicked} />
            </div>
            <Table data={data}
                selectedRows={selectedTableRow}
                onRowSelection={updateSelectedTableRow}
                selectable={true}
            />
            <Pagination />
        </div>
    )
}

export default TableData