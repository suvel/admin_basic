import React, { useContext } from 'react'
import Table from '../Table'
import Button from '../Button'
import './style.css'
import alert_emoji from '../asset/alert_emoji.svg'
import { TableContext } from '../context/tableContext'

const MultiRowAction = ({ onCancelClick, onDeleteClick }) => {
    const { selectedTableRow } = useContext(TableContext);

    const handelDeletingMultipleRows = () => { 
        const idsToDelete = selectedTableRow.map(row => row.id);
        onDeleteClick(idsToDelete);
    }

    return (
        <div className='MultiRowAction'>
            <div className='MultiRowAction_cation'>
                <img src={alert_emoji} />
                <p>Review the rows that you have selected for removing, by clicking Delete you might not get the data back</p>
            </div>
            <div className="MultiRowAction_tableContainer">
                <Table
                    data={selectedTableRow} />
            </div>
            <div className='MultiRowAction_action'>
                <Button onClick={handelDeletingMultipleRows} type='outline' variant='alert' >Delete</Button>
                <Button onClick={onCancelClick}>Cancel</Button>
            </div>
        </div>
    )
}

export default MultiRowAction