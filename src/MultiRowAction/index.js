import React, { useState, useEffect } from 'react'
import Table from '../Table'
import Button from '../Button'

const MultiRowAction = () => {
    const [val, setVal] = useState([
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
    ])

    useEffect(() => {
        // setTimeout(() => {
        //     setVal([])
        // }, 10000)
    }, [])

    return (
        <div className='MultiRowAction'>
            <div className='MultiRowAction_cation'>
                caution banner
            </div>
            <Table data={val} />
            <div className='MultiRowAction_action'>
                <Button>Delete</Button>
                <Button>Cancel</Button>
            </div>
        </div>
    )
}

export default MultiRowAction