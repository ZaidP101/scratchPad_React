import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [val, setVal] = useState(14) // setVal is a function to redender val
  let addnum = ()=>{
    val = val+1;
    setVal(val);
    console.log("cliked", val, Math.random());
  }
  let subnum = () =>{
    if(val>0){
      val -= 1;
    }
    setVal(val);
    console.log("cliked", val, Math.random());
  }
  return (
    <>
      <h1>Count number</h1>
      <h3>Count value: {val}</h3>

      <button
      onClick={addnum}>click to add</button>
      <br />
      <button
      onClick={subnum}>click to subtract</button>
    </>
  )
}

export default App
