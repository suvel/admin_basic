import './style.css'
import ClickableText from '../ClickableText'
import wel_emoji from '../asset/wel_emoji.png'

const WelcomeBanner = ({
  handelAdjustingWorkSpaceWind,
}) => {
  return (
    <div className='welcomeBanner'>
      <img src={wel_emoji} />
      <span className='intro_content'>
        <h1>Welcome to the ADMIN PAGE</h1>
        <ClickableText onClick={handelAdjustingWorkSpaceWind}>
          <p ><small>💡 Click here to read about the webpage</small></p>
        </ClickableText>
      </span>
    </div>
  )
}

export default WelcomeBanner
