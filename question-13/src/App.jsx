import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ProductTable from "./components/ProductTable";

function App(){
  const [dataRecived,setDataRecived]=useState([]);
  const [fileteredArray,setFilteredArray]=useState([]);

  useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
    .then((response)=>response.json())
    .then((data)=>
      {
        setDataRecived(data) 
        setFilteredArray(data)
      }
    )
    .catch((e)=>console.log(e))
  },[])

  function SortArray(e){
    let selectedOption=e.target.value;

    if(selectedOption==="LowToHigh"){
      setFilteredArray([...dataRecived].sort((a,b)=> a.price-b.price))
      return;
    }

    setFilteredArray([...dataRecived].sort((a,b)=> b.price-a.price))
    return;
  }

  return(
    <>
      <select onChange={SortArray}>
        <option value="LowToHigh">
          Price Low to High 
        </option>
        <option value="HighToLow">
          Price High to Low
        </option>
      </select>

      <ProductTable products={fileteredArray}/>
    </>
  )
}

export default App;