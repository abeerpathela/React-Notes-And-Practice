import { useState } from 'react'
import './App.css'

function App() {
  const randomColors=["red","yellow","green"];
  const [backgroundColor,setBackgroundColor]=useState("black");
  function clickHandler(){
    let number=Math.floor(Math.random() * 3);
    setBackgroundColor(randomColors[number]);
  }
  return (
      <>
        <div style={{backgroundColor:backgroundColor, height:"100vh", width:"100vw"}} >
          this is the box 
        </div>
        <button onClick={clickHandler}>Click</button>
      </>
  )
}

export default App
