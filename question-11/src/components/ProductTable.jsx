import React, { useEffect, useState } from "react";

function ProductTable(props){
    const [filterArray,setFilterArray]=useState([]);

    function findPremium(){
        let temp=[];
         props.products.map((product)=>{
                        if(product.price>10000){
                           temp.push(product.name);
                        }
                    })
        setFilterArray(temp);
    }
    function calculateAverage(){
        let sum=0; 
        {
            props.products.map((product)=>{
                sum=sum+product.price;
            })
        }
        return sum/props.products.length;
    }

    useEffect(() => {
        findPremium();
    }, []);
    

    return(
        <>
        <table border={1}>
            <thead>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Availability Stock</th>
            </thead>
            <tbody>
            {
                props.products.map((product)=>(
                    <tr style={{color:product.stock === 0 ? ("red"): (product.stock > 10 ? (product.price > 50000 ? "green" : "black"):("orange"))}}>
                        <td>
                            {product.name}
                        </td>
                        <td>
                            {product.category}
                        </td>
                        <td>
                            {product.price}
                        </td>
                        <td>
                            {product.stock}
                        </td>
                        <td>
                            { product.stock == 0 ? ("Out of Stock"): (product.stock > 10 ? ("In Stock"):("Limited Stock"))}
                        </td>
                    </tr>
                ))
            }
            </tbody>
        </table>
        <div>
            <h1>Catalog Statistics</h1>
            <p>Total items in Catalog: {props.products.length}</p>
            <p>Average Product Price: {calculateAverage()}</p>
        </div>
        <div>
            <h1>Premium Products</h1>
            {  
            
                filterArray.length === 0 ? "No premium products available at the moment":
                (
                    <ul>
                       { filterArray.map((p)=>(
                            <li>{p}</li>
                        ))}
                    </ul>
                )
            }
        </div>
        <div>
            <h1>Electronics Clearance</h1>
            <ul>
                {
                    props.products.map((product)=>{
                        if(product.stock<5 && product.category=="Electronics"){
                            return <li>{product.name}-Only {product.stock} left</li>
                        }
                })
                }
            </ul>
        </div>
        </>
    )
}

export default ProductTable;