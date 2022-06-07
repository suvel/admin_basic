import React, { useState, useEffect } from 'react'
import Table from '../Table'
import Button from '../Button'
import './style.css'
import alert_emoji from '../asset/alert_emoji.svg'

const MultiRowAction = () => {
    return (
        <div className='MultiRowAction'>
            <div className='MultiRowAction_cation'>
                <img src={alert_emoji} />
                <p>Review the rows that you have selected for removing, by clicking Delete you might get the data back</p>
            </div>
            <div className="MultiRowAction_tableContainer">
                <Table
                    data={[
                        {
                            "id": "1",
                            "name": "Aaron Miles",
                            "email": "aaron@mailinator.com",
                            "role": "member"
                        },
                        {
                            "id": "2",
                            "name": "Aishwarya Naik",
                            "email": "aishwarya@mailinator.com",
                            "role": "member"
                        },
                        {
                            "id": "3",
                            "name": "Arvind Kumar",
                            "email": "arvind@mailinator.com",
                            "role": "admin"
                        },
                        {
                            "id": "10",
                            "name": "Aaron Miles",
                            "email": "aaron@mailinator.com",
                            "role": "member"
                        },
                        {
                            "id": "20",
                            "name": "Aishwarya Naik",
                            "email": "aishwarya@mailinator.com",
                            "role": "member"
                        },
                        {
                            "id": "30",
                            "name": "Arvind Kumar",
                            "email": "arvind@mailinator.com",
                            "role": "admin"
                        }
                    ]} />
            </div>
            <div className='MultiRowAction_action'>
                <Button type='outline' variant='alert' >Delete</Button>
                <Button>Cancel</Button>
            </div>
        </div>
    )
}

export default MultiRowAction