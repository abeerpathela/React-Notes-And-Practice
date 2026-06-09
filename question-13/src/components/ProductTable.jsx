import React from "react";
import { useState, useEffect } from "react";

function ProductTable(props) {

    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Rating</th>
                    <th>Image</th>
                </tr>
            </thead>

            <tbody>
                {props.products.map((product) => (
                    <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.title}</td>
                        <td>${product.price}</td>
                        <td>{product.category}</td>
                        <td>{product.rating.rate}</td>
                        <td>
                            <img
                                src={product.image}
                                alt={product.title}
                                width="50"
                            />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default ProductTable;