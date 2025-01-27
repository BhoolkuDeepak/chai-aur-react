import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter] =  useState(15)
  //usestate value change ko propagate karta hai dom ko  
  

  const addValue = ()=>{
    counter=counter+1;
    setCounter(counter)
    console.log(counter);
  }

  const subtractValue = ()=>{
    if(counter>0){
      counter=counter-1;
    }
    setCounter(counter)
    console.log(counter);
    
    // console.log("value added",Math.random());

  }
  return (
    <>
    <h1>Chai aur Code</h1>
    <h2>Counter Value: {counter}</h2>

    <button onClick={addValue}>Add Value</button>
    <br />

    <button onClick={subtractValue}>Remove Value</button>
    </>
  )
}

export default App
