import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  let [count, setCount] = useState(15)
  function addvalue(){
    if(count<20){setCount(count+1);}else{count}
  }
  function decreasevalue(){
    if(count>0){setCount(count-1);}else{count}
  }


  return (
    <>
     <h1>Chair aur react</h1>
     
     <h2>Counter :{count}</h2>
     <button onClick={addvalue}>Add value{count}</button>
     <br />
     <button onClick={decreasevalue}>Decrease value: {count}</button>
    </>
  )
}

export default App
