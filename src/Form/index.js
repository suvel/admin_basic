import React from 'react'
import LabeledInput from '../LabeledInput'
import './style.css'

const Form = () => {
    return (
        <div className='Form'>
            <LabeledInput labelValue={"Name"} type="text" placeholder="Name" />
            <LabeledInput labelValue={"Email"} type="text" placeholder="Email" />
            <LabeledInput labelValue={"Role"} type="text" placeholder="Role" />
        </div>
    )
}

export default Form