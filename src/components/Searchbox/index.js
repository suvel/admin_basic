import React, { useState } from 'react'
import Input from '../Input'
import Button from '../Button'
import './style.css'

const Searchbox = ({ onSearchClicked }) => {

    const [searchText, setSearchText] = useState('')

    const handelOnSearchTextChange = (e) => {
        setSearchText(e.target.value)
    }

    const handelOnSearch = () => {
        onSearchClicked(searchText)
    }

    return (
        <div className='Searchbox'>
            <Input value={searchText} onChange={handelOnSearchTextChange} type='text' placeholder='Search' />
            <Button onClick={handelOnSearch}>Search</Button>
        </div>
    )
}

export default Searchbox
