import React, { useContext, useState, useEffect } from 'react'
import './style.css'
import Searchbox from '../Searchbox'
import Table from '../Table'
import Pagination from '../Pagination'
import { TableContext } from '../context/tableContext'

function TableData({ initialData }) {
    const [paginatedData, setPaginatedData] = useState([]);
    const {
        selectedTableRow,
        updateSelectedTableRow,
        tableData,
        updateTableData,
    } = useContext(TableContext);

    const handelOnSearchClicked = (searchText) => {

        const handelSearch = () => {
            if (searchText) {
                const searchData = initialData.filter(item => {
                    return (
                        item.name.toLowerCase().includes(searchText.toLowerCase()) ||
                        item.email.toLowerCase().includes(searchText.toLowerCase()) ||
                        item.role.toLowerCase().includes(searchText.toLowerCase())
                    )
                })
                updateTableData(searchData)
            }
            else {
                updateTableData(initialData)
            }
        }

        const clearSelection = () => {
            updateSelectedTableRow([])
        }

        handelSearch();
        clearSelection();

    }

    const handelOnPageChange = (start, end) => {
        const pageData = tableData.slice(start, end);
        setPaginatedData(pageData);
    }

    useEffect(() => {
        updateTableData(initialData);
    }, [initialData])

    return (
        <div className='TableData' >
            <div className="TableData_searchbox_container">
                <Searchbox onSearchClicked={handelOnSearchClicked} />
            </div>
            <Table data={paginatedData}
                selectedRows={selectedTableRow}
                onRowSelection={updateSelectedTableRow}
                selectable={true}
            />
            <Pagination records={tableData} onPageChange={handelOnPageChange} />
        </div>
    )
}

export default TableData