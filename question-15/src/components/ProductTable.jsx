import React from "react";

function ProductTable(props){
    return(
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>name</th>
                    <th>category</th>
                    <th>price</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.productss.map((p)=>(
                        <tr>
                            <td>{p.id}</td>
                            <td>{p.name}</td>
                            <td>{p.category}</td>
                            <td>{p.price}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default ProductTable;