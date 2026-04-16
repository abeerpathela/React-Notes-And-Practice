import React, { useState } from "react";

function App(){
  const [isShowing,setIsShowing]=useState(false);
  const [current,setCurrent]=useState("password");

  function showPass(e){
    e.preventDefault();
     if(isShowing==true){
      setCurrent("password");4
      setIsShowing(false);
     }
     else{
      setCurrent("text");
      setIsShowing(true);
     }
  }
  return(
    <div>
      <form>
        <div>
          <label>Enter Name</label>
          <input type="text"></input>
        </div>
        <div>
          <label>Enter Password</label>
          <input type={current}></input>
          <button onClick={showPass}>S</button>
        </div>
      </form>
    </div>
  )
}

export default App;