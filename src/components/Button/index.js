import React from 'react'
import './style.css'

/*
carefree - no side effects
alert - has sever side effects
*/


const Button = ({ type = "solid", variant = "carefree", children, ...props }) => {
    return (
        <button className={`Button ${type} ${variant}`} {...props}>{children}</button>
    )
}

export default Button