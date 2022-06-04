import React from 'react'
import './style.css'
import wel_emoji from '../asset/wel_emoji.png'

function Intro() {
  return (
    <div className='Intro'>
      <div className='welcomeBanner'>
        <img src={wel_emoji} />
        <h1>Welcome to the ADMIN PAGE</h1>
      </div>
    </div>
  )
}

export default Intro