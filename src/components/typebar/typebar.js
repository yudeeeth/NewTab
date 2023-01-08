import React,{useEffect} from 'react'
import './typebar.css'
import execute from './util'

const Typebar = (props)=>{

  const clearinput = ()=>{
    props.inputRef.current.value = "";
  }
  const handleKey = (e)=>{
    if(e.code==='Enter'){
      let out = execute(props.inputRef.current.value,clearinput,props.setShowHints);
      if(out !== undefined || out !== null){
        //preprocess out
        let hints = [];
        for(let key in out){
          hints.push({title:key,content:out[key]});
        }
        // console.log(hints);
        props.setShowHints(true);
        props.setHints(hints);
      }
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