import React, { useState } from 'react'
import './style.css'
import TableData from '../TableData';
import TableDataPallet from '../TableDataPallet'
import Separator from '../Separator';
import arrow from '../asset/arrow.svg'

function Wrkspace() {

    const [fulHgt, setFulHgt] = useState(window.innerHeight);

    const fullHeightClass = fulHgt == true ? 'full-height' : '';

    const toggleFullHeight = () => {
        setFulHgt(val => !val);
    }

    return (
        <div  className={`Wrkspace ${fullHeightClass}`}>
            <div onClick={toggleFullHeight} className="Wrkspace_fullscreen_toggler">
                <img src={arrow} />
                <div>FULL SCREEN</div>
            </div>
            <div className="Wrkspace_dataContainer">
                <TableData />
                <Separator />
                <TableDataPallet />
            </div>
        </div>
    )
}

export default Wrkspace