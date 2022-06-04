import React from 'react'
import './style.css'
import arrow from '../asset/arrow.svg'

const RoundButton = ({ children, ...props }) => {
    return <button className='RoundButton' {...props} >{children}</button>
}

const Pagination = () => {
    return (
        <div className='Pagination'>
            <RoundButton>
                <img src={arrow} className='arrow arrow_left' />
            </RoundButton >
            <RoundButton>1</RoundButton>
            <RoundButton>2</RoundButton>
            <RoundButton>
                <img src={arrow} className='arrow arrow_right' />
            </RoundButton >
        </div>
    )
}

export default Pagination
