import React, { useContext, useState, useEffect } from 'react'
import './style.css'
import Searchbox from '../Searchbox'
import Table from '../Table'
import Pagination from '../Pagination'
import { TableContext } from '../../context/tableContext'

function TableData({ initialData }) {
    const [paginatedData, setPaginatedData] = useState([]);
    const {
        selectedTableRow,
        updateSelectedTableRow,
        tableData,
        updateTableData,
    } = useContext(TableContext);
    const [searchData, setSearchData] = useState([]);

    const clearSelection = () => {
        updateSelectedTableRow([])
    }

    const handelOnSearchClicked = (searchText) => {

        const handelSearch = () => {
            if (searchText) {
                const srchData = tableData.filter(item => {
                    return (
                        item.name.toLowerCase().includes(searchText.toLowerCase()) ||
                        item.email.toLowerCase().includes(searchText.toLowerCase()) ||
                        item.role.toLowerCase().includes(searchText.toLowerCase())
                    )
                })
                setSearchData(srchData)
            }
            else {
                setSearchData(tableData)
            }
        }

        handelSearch();
        clearSelection();

    }

    const handelOnPageChange = (start, end) => {
        const pageData = searchData.slice(start, end);
        setPaginatedData(pageData);
        clearSelection();
    }

    useEffect(() => {
        updateTableData(initialData);
        setSearchData(initialData)
    }, [initialData])

    useEffect(() => {
        setSearchData(tableData)
    }, [tableData])

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
            <Pagination records={searchData} onPageChange={handelOnPageChange} />
        </div>
    )
}

export default TableData