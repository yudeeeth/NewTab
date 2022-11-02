import './App.css';
import React from 'react';
import Typebar from './components/typebar/typebar';

function App() {
  const [theme,setTheme] = React.useState('dark');
  const inputRef = React.useRef(null);

  const focusInp = (e)=>{
      inputRef.current.focus();
  }
  
  return (
    <div className='main' theme={theme} tabIndex={0} onKeyDown={(e)=>{focusInp(e)}}>
      <Typebar inputRef={inputRef} ></Typebar>
    </div>
  );
}

export default App;
