import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ProductTable from "./components/ProductTable";

function App() {
  const [dataRecived, setDataRecived] = useState([]);
  const [selectedObject, setSelectedObject] = useState({});

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setDataRecived(data))
      .catch((e) => console.log(e));
  }, []);

  function changeHandler(e) {
    let selectedId = Number(e.target.value);

    let selected = dataRecived.find(
      (product) => product.id === selectedId
    );

    setSelectedObject(selected);
  }

  return (
    <>
      <select onChange={changeHandler}>
        <option value="">Select Product</option>

        {dataRecived.map((p) => (
          <option key={p.id} value={p.id}>
            {p.title}
          </option>
        ))}
      </select>

      {Object.keys(selectedObject).length > 0 && (
        <ProductTable obj={selectedObject} />
      )}
    </>
  );
}

export default App;