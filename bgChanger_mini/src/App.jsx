import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("yellow")
  let red = ()=>{
    setColor("red");
  }
  return (

    <div
    className='container' style={{backgroundColor:color}}>
    
    <button style={{backgroundColor:'red'}} onClick={red}>red</button>
    <button style={{backgroundColor:'blue'}} onClick={()=>{setColor("blue")}}>blue</button>
    </div>

  )
}

export default App
