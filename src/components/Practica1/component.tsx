import './componentstyle.css'
import { ComponentType } from '../../types/component'

const Component = (props: ComponentType) => {
    return(
        <>
        <div className='component-div'>
            <h3 className='author'>{props.author}</h3>
            <p className='date'>{props.date}</p>
            <p className='text'>{props.text}</p>
            <button className='button'>{props.buttonText}</button>
            { props.children}
        </div>
        </>
    )
}
export default Component