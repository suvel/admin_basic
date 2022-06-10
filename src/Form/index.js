import React, { useState } from 'react'
import LabeledInput from '../LabeledInput'
import Button from '../Button'
import './style.css'

const Form = ({ data, onCancelClick, onDeleteClick }) => {

    const [fromData, setFormData] = useState(data);

    const updateFormData = (event, filed) => {
        setFormData(data => ({ ...data, [filed]: event.target.value }));
    }

    return (
        <div className='Form'>
            <LabeledInput value={fromData?.name} onChange={(e) => updateFormData(e, "name")} labelValue={"Name"} type="text" placeholder="Name" />
            <LabeledInput value={fromData?.email} onChange={(e) => updateFormData(e, "email")} labelValue={"Email"} type="text" placeholder="Email" />
            <LabeledInput value={fromData?.role} onChange={(e) => updateFormData(e, "role")} labelValue={"Role"} type="text" placeholder="Role" />
            <div className="Form_buttonsContainer">
                <Button onClick={() => onDeleteClick([data?.id])} type='outline' variant='alert'>Delete</Button>
                <Button type='outline' variant='carefree'>Edit</Button>
                <Button onClick={onCancelClick}>Cancel</Button>
            </div>
        </div>
    )
}

export default Form