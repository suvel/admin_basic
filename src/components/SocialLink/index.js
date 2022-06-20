import './style.css'

import twitter_icon from '../../asset/sm_twitter.svg'
import fb_icon from '../../asset/sm_fb.svg'
import gmail_icon from '../../asset/sm_gmail.svg'
import linkedIn from '../../asset/sm_li.svg'
import github from '../../asset/sm_github.svg'

const SocialLink = ({ link, socialKey }) => {
  const socialIcon = () => {
    switch (socialKey) {
      case "TW": return twitter_icon;
      case "FB": return fb_icon;
      case "MAIL": return gmail_icon;
      case "LN": return linkedIn;
      case "GH": return github;
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
