import React from "react";
import ProductTable from "./components/ProductTable";


function App(){
  const products = [
    { id: 101, name: "Laptop", price: 85000, category: "Electronics", stock: 15 },
    { id: 102, name: "Office Chair", price: 12000, category: "Furniture", stock: 0 },
    { id: 103, name: "Smart Watch", price: 5000, category: "Electronics", stock: 4 },
    { id: 104, name: "Desk Lamp", price: 1500, category: "Furniture", stock: 8 },
    { id: 105, name: "Mechanical Keyboard", price: 7000, category: "Electronics", stock: 25 },
    { id: 106, name: "Gaming Mouse", price: 3500, category: "Electronics", stock: 2 }
  ];
  return(
    <div>
      <h1>Product Dashboard</h1>
      <ProductTable products={products}/>
    </div>
  )
}

export default App;