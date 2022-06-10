import React, { useState, useEffect } from 'react'
import './style.css'
import TableData from '../TableData';
import TableDataPallet from '../TableDataPallet'
import Separator from '../Separator';
import arrow from '../asset/arrow.svg'
import TableProvider from '../context/tableContext'
import memberlistPromise from '../services/members/member.ls.js';


function Wrkspace() {

    const [fulHgt, setFulHgt] = useState(window.innerHeight);
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        const asynFun = async () => {
            const memberlist = await memberlistPromise();
            setTableData(memberlist);
        }
        asynFun();
    }, [])

    const fullHeightClass = fulHgt == true ? 'full-height' : '';

    const toggleFullHeight = () => {
        setFulHgt(val => !val);
    }

    return (
        <div className={`Wrkspace ${fullHeightClass}`}>
            <div onClick={toggleFullHeight} className="Wrkspace_fullscreen_toggler">
                <img src={arrow} />
                <div>FULL SCREEN</div>
            </div>
            <div className="Wrkspace_dataContainer">
                <TableProvider>
                    <TableData initialData={tableData} />
                    <Separator />
                    <TableDataPallet />
                </TableProvider>
            </div>
        </div>
    )
}

export default Wrkspace