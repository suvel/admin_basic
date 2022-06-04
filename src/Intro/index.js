import React from 'react'
import './style.css'
import wel_emoji from '../asset/wel_emoji.png'

function Intro() {
  return (
    <div className='Intro'>
      <div className='welcomeBanner'>
        <img src={wel_emoji} />
        <p>Welcome to the ADMIN PAGE</p>
      </div>
    </div>
  )
}

export default Intro