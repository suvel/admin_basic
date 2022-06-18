import './style.css'

import twitter_icon from '../../asset/sm_twitter.svg'
import fb_icon from '../../asset/sm_fb.svg'
import gmail_icon from '../../asset/sm_gmail.svg'

const SocialLink = ({ link, socialKey }) => {
  const socialIcon = () => {
    switch (socialKey) {
      case "TW": return twitter_icon;
      case "FB": return fb_icon;
      case "MAIL": return gmail_icon;
      default: return twitter_icon;
    }
  }
  return (
    <a href={link} target="_blank">
      <img src={socialIcon()} />
    </a>
  )
}

export default SocialLink
