import React, { useState } from 'react'
import './style.css'
import TableData from '../TableData';
import TableDataPallet from '../TableDataPallet'
import Separator from '../Separator';

function Wrkspace() {

    const [fulHgt, setFulHgt] = useState(window.innerHeight);

    const fullHeightClass = fulHgt == true ? 'full-height' : '';

    const toggleFullHeight = () => {
        setFulHgt(val => !val);
    }

    return (
        <div onClick={toggleFullHeight} className={`Wrkspace ${fullHeightClass}`}>
            <div className="Wrkspace_dataContainer">
                <TableData />
                <Separator />
                <TableDataPallet />
            </div>
        </div>
    )
}

export default Wrkspace