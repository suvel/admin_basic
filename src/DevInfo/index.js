import './style.css'
import twitter_icon from '../asset/sm_twitter.svg'
import fb_icon from '../asset/sm_fb.svg'
import gmail_icon from '../asset/sm_gmail.svg'
import wel_emoji from '../asset/wel_emoji.png'

const DevInfo = () => {
  return (
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
  )
}

export default DevInfo
