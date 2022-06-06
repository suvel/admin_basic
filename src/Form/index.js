import React from 'react'
import LabeledInput from '../LabeledInput'
import Button from '../Button'
import './style.css'

const Form = ({ onCancelClick }) => {

    return (
        <div className='Form'>
            <LabeledInput labelValue={"Name"} type="text" placeholder="Name" />
            <LabeledInput labelValue={"Email"} type="text" placeholder="Email" />
            <LabeledInput labelValue={"Role"} type="text" placeholder="Role" />
            <div className="Form_buttonsContainer">
                <Button type='outline' variant='alert'>Delete</Button>
                <Button type='outline' variant='carefree'>Edit</Button>
                <Button onClick={onCancelClick}>Cancel</Button>
            </div>
        </div>
    )
}

export default Form