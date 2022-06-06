import React from 'react'
import Input from '../Input'
import Button from '../Button'
import './style.css'

const Searchbox = () => {
    return (
        <div className='Searchbox'>
            <Input type='text' placeholder='Search' />
            <Button>Search</Button>
        </div>
    )
}

export default Searchbox
