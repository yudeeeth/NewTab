import React from 'react'
import './hint.css'

const Hint = (props) => {
    const formatHints = (hint)=>{
        return (
            <div className='hint' key={hint.content}>
                <div className='hint-type'></div>
                <div className='hint-title'>{hint.title}</div>
                <div className='hint-content'>{hint.content}</div>
            </div>
        )
    }

    return (
        <div className='hints-container'>
            {
                props.hints.map(e=>formatHints(e))
            }
            {/* {console.log(props.hints)} */}
        </div>
    )
}

export default Hint