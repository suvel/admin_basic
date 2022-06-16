import React from 'react'
import './style.css'
import wel_emoji from '../asset/wel_emoji.png'

function Intro() {
  return (
    <div className='Intro'>
      <div className='welcomeBanner'>
        <img src={wel_emoji} />
        <span className='intro_content'>
          <h1>Welcome to the ADMIN PAGE</h1>
          <p><small>💡 Click here to read about the webpage</small></p>
        </span>
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default Intro