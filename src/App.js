import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react'

function App() {
  const [data, setData] = useState(null)
  const [toggle, setToggle] = useState(false)
  
  const onClick = () => setToggle(prev => !prev)
  
  useEffect(() => {
    setTimeout(() => {
      setData({})
    }, 100)
  }, [])
  
  
  return (
    <div className="App">
      {toggle === true && <div data-testid='toggle-elem'>toggle</div>}
      {data && <div>data</div>}
      <h1>
        Hello world
        <button data-testid='toggle-btn' onClick={onClick}>
          click me
        </button>
        <input type="text" placeholder='input value...'/>
      </h1>
    </div>
  );
}

export default App;
