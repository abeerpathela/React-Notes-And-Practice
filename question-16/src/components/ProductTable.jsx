import React from "react";

function ProductTable(props){
    return(
        <div>
            <img src={props.obj.image}></img>
            <p>{props.obj.title}</p>
            <p>Category: {props.obj.category}</p>
            <p>Price: {props.obj.price}</p>
            <p>{props.obj.description}</p>
        </div>
    )
}

export default ProductTable;