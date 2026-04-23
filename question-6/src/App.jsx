import { useState } from 'react'
import './App.css'

function App() {
  const [isDisabled,setIsDisabled]=useState(false);
  function changeHandler(){
    setIsDisabled(true);
  }
  return (
    <>
      <button onClick={changeHandler}>{ isDisabled ? "Clicked" : "Click Me"}</button>
    </>
  )
}

export default App
