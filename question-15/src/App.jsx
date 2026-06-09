import React from "react";
import { useState } from "react";
import ProductTable from "./components/ProductTable";

function App(){
  const [selectedOption,setSelectedOption]=useState("Electronics");
  const products = [
            {
              id: 1,
              name: "Laptop",
              category: "Electronics",
              price: 50000
            },
            {
              id: 2,
              name: "T-Shirt",
              category: "Clothing",
              price: 1200
            },
            {
              id: 3,
              name: "Mobile",
              category: "Electronics",
              price: 30000
            },
            {
              id: 4,
              name: "Jeans",
              category: "Clothing",
              price: 2000
            }
  ];
  const [filteredArray,setFilteredArray]=useState([...products]);
  function changeHandler(e){
    let selectedOption=e.target.value;
    let temp=[];
    if(selectedOption==="Clothing"){
        products.map((p)=>{
          if(p.category=="Clothing"){
            temp.push(p);
          }
        }
      )
      setFilteredArray(temp);
      return;
    }
    products.map((p)=>{
          if(p.category=="Electronics"){
            temp.push(p);
          }
        }
      )
      setFilteredArray(temp);
      return;
  }
  return(
    <>
      <label>Electronics</label>
      <input type="checkbox" onChange={changeHandler} value="Electronics"></input>
      <label>Clothing</label>
      <input type="checkbox" onChange={changeHandler} value="Clothing"></input>
      <ProductTable productss={filteredArray}/>
    </>
  )
}

export default App;