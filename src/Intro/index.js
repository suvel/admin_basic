import React, { useContext } from 'react'
import './style.css'
import wel_emoji from '../asset/wel_emoji.png'
import { WrkSpaceWinContext } from '../context/wrkSpaceWinContext'

const ClickableText = ({ children, onClick }) => {
  return <span onClick={onClick} className='clickableText'>{children}</span>
}

function Intro() {

  const { toggleWindowType, availableWindowTypes } = useContext(WrkSpaceWinContext);

  const handelAdjustingWorkSpaceWind = () => {
    toggleWindowType(availableWindowTypes.WT_MIN);
  }

  return (
    <div className='Intro'>
      <div className='welcomeBanner'>
        <img src={wel_emoji} />
        <span className='intro_content'>
          <h1>Welcome to the ADMIN PAGE</h1>
          <ClickableText onClick={handelAdjustingWorkSpaceWind}>
            <p ><small>💡 Click here to read about the webpage</small></p>
          </ClickableText>
        </span>
      </div>
      <div>

      </div>
    </div>
  )
}

export default Intro