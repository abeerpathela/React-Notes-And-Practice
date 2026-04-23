import React from "react";
import { useState } from "react";

function App(){
  const [text,setText]=useState('');
  function changeHandler(event){
    setText(event.target.value);
  }
  return(
    <div>
      <input type="text" onChange={changeHandler}></input>
      <p>{text}</p>
    </div>
  )
}

export default App