import Input from '../Input'
import './style.css'

const LabeledInput = ({ labelValue, ...props }) => {
    return (
        <div className='LabeledInput'>
            <label>{labelValue}</label>
            <Input {...props} />
        </div>)
}

export default LabeledInput;