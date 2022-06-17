import './style.css'

const ClickableText = ({ children, onClick }) => {
  return <span onClick={onClick} className='clickableText'>{children}</span>
}

export default ClickableText
