import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numAllow, setNumAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState("");
  
  const usePassRef = useRef(null)
  const copyToBoard = useCallback(()=>{
    usePassRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password])
  const passGenerator = useCallback(() =>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    
    if(numAllow) str += "0123456789";
    if(charAllow) str += "!@#$%^&*(){}:[]?><+_";

    for(let i=1; i<=length; i++){
      let char = Math.floor(Math.random()*str.length+1);
      pass += str.charAt(char)
    }

    setPassword(pass);
  }, [length,numAllow, charAllow, setPassword]);
  useEffect(()=>{
    passGenerator()
  }, [length, numAllow, charAllow, passGenerator])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg
      px-4 py-3 my-8 bg-gray-800 text-orange-500'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-white text-orange-700'>
          <input 
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='Password'
            readOnly
            ref={usePassRef}/>
            <button
              onClick={copyToBoard}
              className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
              min={6}
              max={50}
              value={length}
              className='cursor-pointer' 
              onChange={(e) =>{setLength(e.target.value)}}/>
              <label>Length: {length}</label> 
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={numAllow}
              id='numberInput'
              onChange={() =>{
                setNumAllow((prev)=> !prev)
              }} />
              <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={charAllow}
              id='charInput'
              onChange={() =>{
                setNumAllow((prev)=> !prev) // prev refferes to previous value (true or false), here just change the pec=vious value , liek check or unceheck
              }} />
              <label htmlFor="charInput">Charaters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
