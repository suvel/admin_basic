import './style.css'
import wel_emoji from '../../asset/wel_emoji.png'
import devDetail from '../../content/devDetail.json'
import SocialLink from '../SocialLink'

const DevInfo = () => {
  return (
    <div className="dev_info">
      <div className="avatar">
        <img src={wel_emoji} />
      </div>
      <div className="dev_detail">
        <div className="dev_name">
          {devDetail.name}
        </div>
        <div className="dev_designation">
          {`${devDetail.designation}@${devDetail.company}`}
        </div>
        <div className="dev_contact">
          {
            devDetail?.social_contact.map((social) => {
              return <SocialLink key={social.key} link={social.url} socialKey={social.key} />
            })
          }
        </div>
      </div>
    </div>
  )
}

export default DevInfo
