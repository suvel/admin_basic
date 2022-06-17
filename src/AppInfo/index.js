import './style.css'
import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import aboutMD from '../content/about.md'

const AppInfo = () => {
  const [applicationIntro, setApplicationIntro] = useState("");

  useEffect(() => {
    fetch(aboutMD).then((response) => response.text()).then((text) => {
      setApplicationIntro(text)
    })
  }, [])

  return (
    <div className="app_intro">
      <ReactMarkdown children={applicationIntro} />
    </div>
  )
}

export default AppInfo
