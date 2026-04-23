import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Products from "./components/Products";
import Electronics from "./components/Electronics";
import Furniture from "./components/Furniture";
import Clothing from "./components/Clothing";


function App(){
  return(
    <div>
      <Routes>
        <Route path="/products" element={<Products/>}>
          <Route path="electronics" element={<Electronics/>}></Route>
          <Route path="furniture" element={<Furniture/>}></Route>
          <Route path="clothing" element={<Clothing/>}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App