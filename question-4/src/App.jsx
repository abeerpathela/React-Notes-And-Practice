import { useState } from 'react'
import './App.css'

function App() {
  const [count,setCount]=useState(0);

  function PlusChangeHandler(){
    count+1 <=10 ? setCount(count+1): setCount(10);
  }
  function MinusChangeHandler(){
    count-1 >=0 ? setCount(count-1) : setCount(0);
  }
  return (
    <>
      <div style={{ display: "flex"}}>
        <button onClick={MinusChangeHandler}>-</button>
        <p>{count}</p>
        <button onClick={PlusChangeHandler}>+</button>
      </div>
    </>
  )
}

export default App
