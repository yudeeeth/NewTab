import React,{useEffect} from 'react'
import './typebar.css'
import execute from './util'

const Typebar = (props)=>{
  const [inpText,setInpText] = React.useState("")
  const handleKey = (e)=>{
    setInpText(e.target.value);
    if(e.code==='Enter'){
      execute(inpText);
    }
  }


  return (
    <div className='typebar-container'>
      <input ref={props.inputRef} className='typebar' autoFocus onKeyDown={(e)=>{handleKey(e)}} defaultValue="">
      </input>
    </div>
  )
}

export default Typebar