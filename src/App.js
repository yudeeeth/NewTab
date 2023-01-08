import './App.css';
import React from 'react';
import Typebar from './components/typebar/typebar';
import Hint from './components/hints/Hint';

function App() {
  const [theme,setTheme] = React.useState('dark');
  const [hints,setHints] = React.useState([]);
  const [showHints,setShowHints] = React.useState(false);
  const inputRef = React.useRef(null);

  const focusInp = (e)=>{
      inputRef.current.focus();
  }

  return (
    <div className='main' theme={theme} tabIndex={0} onKeyDown={(e)=>{focusInp(e)}}>
      <Typebar inputRef={inputRef} setHints={setHints} setShowHints={setShowHints}></Typebar>
      {showHints && <Hint hints={hints} ></Hint>}
    </div>
  );
}

export default App;
