import React from 'react'
import Input from '../Input'
import './style.css'

const Searchbox = () => {
    return (
        <div className='Searchbox'>
            <Input type='text' placeholder='Search' />
            <button>Search</button>
        </div>
    )
}

export default Searchbox
