import React, { useContext, useEffect, useState } from 'react'
import './style.css'
import wel_emoji from '../asset/wel_emoji.png'
import { WrkSpaceWinContext } from '../context/wrkSpaceWinContext'
import ReactMarkdown from 'react-markdown'
import aboutMD from '../content/about.md'
import twitter_icon from '../asset/sm_twitter.svg'
import fb_icon from '../asset/sm_fb.svg'
import gmail_icon from '../asset/sm_gmail.svg'

const ClickableText = ({ children, onClick }) => {
  return <span onClick={onClick} className='clickableText'>{children}</span>
}

function Intro() {

  const [applicationIntro, setApplicationIntro] = useState("")
  const { toggleWindowType, availableWindowTypes } = useContext(WrkSpaceWinContext);

  const handelAdjustingWorkSpaceWind = () => {
    toggleWindowType(availableWindowTypes.WT_MIN);
  }

  useEffect(() => {
    fetch(aboutMD).then((response) => response.text()).then((text) => {
      debugger
      setApplicationIntro(text)
    })
  }, [])

  useEffect(() => {
    console.log(applicationIntro)
    debugger
  }, [applicationIntro])

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
      <div className='application_content'>
        <div className="app_intro">
          <ReactMarkdown children={applicationIntro} />
        </div>
        <div className="dev_info">
          <div className="avatar">
            <img src={wel_emoji} />
          </div>
          <div className="dev_detail">
            <div className="dev_name">
              Cody Fisher
            </div>
            <div className="dev_designation">
              SE @ Barone LLC.
            </div>
            <div className="dev_contact">
              <img src={twitter_icon} />
              <img src={fb_icon} />
              <img src={gmail_icon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro