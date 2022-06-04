import React, { useState } from 'react'
import './style.css'

function Wrkspace() {

    const [fulHgt, setFulHgt] = useState(window.innerHeight);

    const fullHeightClass = fulHgt == true ? 'full-height' : '';

    const toggleFullHeight = () => {
        setFulHgt(val => !val);
    }

    return (
        <div onClick={toggleFullHeight} className={`Wrkspace ${fullHeightClass}`}>Wrkspace</div>
    )
}

export default Wrkspace