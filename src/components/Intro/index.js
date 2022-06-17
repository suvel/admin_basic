import React, { useContext} from 'react'
import './style.css'
import { WrkSpaceWinContext } from '../../context/wrkSpaceWinContext'
import WelcomeBanner from '../WelcomeBanner'
import AppInfo from '../AppInfo'
import DevInfo from '../DevInfo'

function Intro() {

  const { toggleWindowType, availableWindowTypes } = useContext(WrkSpaceWinContext);

  const handelAdjustingWorkSpaceWind = () => {
    toggleWindowType(availableWindowTypes.WT_MIN);
  }

  return (
    <div className='Intro'>
      <WelcomeBanner handelAdjustingWorkSpaceWind={handelAdjustingWorkSpaceWind} />
      <div className='application_content'>
        <AppInfo />
        <DevInfo />
      </div>
    </div >
  )
}

export default Intro