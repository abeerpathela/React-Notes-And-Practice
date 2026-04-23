import { useState } from 'react'
import './App.css'

function App() {
  const [currentOption,setCurrentOption]=useState("none");
  function changeHandler(event){
    event.preventDefault();
    if(event.target.value!="none"){
      setCurrentOption(event.target.value);
    }
  }
  return (
    <>
      <select onChange={changeHandler}>
        <option value="none">Select</option>
        <option value="HTML">HTML</option>
        <option value="CSS">CSS</option>
        <option value="JavaScript">JavaScript</option>
        <option value="React">React</option>
      </select>
      <p style={{ display: currentOption == "none" ? "none":"block"}}>You Selected: {currentOption}</p>
    </>
  )
}

export default App
