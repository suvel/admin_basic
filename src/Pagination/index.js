import React, { useEffect, useState } from 'react'
import './style.css'
import arrow from '../asset/arrow.svg'

const RoundButton = ({ children, selected, ...props }) => {
    return <button className={`RoundButton ${selected ? "selected" : ""}`}  {...props} > {children}</button >
}

const maxRowPerPage = 10;

const Pagination = ({ numberOfRecords, onPageChange }) => {

    const [curPage, setCurPage] = useState(1);

    const PageCount = Math.ceil(numberOfRecords / maxRowPerPage);
    const getPageNumber = () => {
        let pageNumber = [];
        for (let i = 1; i <= PageCount; i++) {
            pageNumber.push(i);
        }
        return pageNumber;
    }

    const handelNavigation = (navigationId) => {
        let newNavigationId = navigationId;
        if (navigationId == "nxt") {
            newNavigationId = curPage + 1
        }
        else if (navigationId == "prv") {
            newNavigationId = curPage - 1
        }
        debugger;
        setCurPage(newNavigationId);
        onPageChange((newNavigationId - 1) * maxRowPerPage, maxRowPerPage * newNavigationId);
    }

    useEffect(() => {
        onPageChange(0, maxRowPerPage);
    }, [])

    return (
        <div className='Pagination'>
            <RoundButton onClick={() => handelNavigation("prv")} >
                <img src={arrow} className='arrow arrow_left' />
            </RoundButton >
            {
                getPageNumber().map(page => {
                    return <RoundButton selected={page == curPage} onClick={() => handelNavigation(page)} key={page}>{page}</RoundButton>
                })
            }
            <RoundButton onClick={() => handelNavigation("nxt")}>
                <img src={arrow} className='arrow arrow_right' />
            </RoundButton >
        </div>
    )
}

export default Pagination
