import React from "react";
import { Link, Outlet } from "react-router-dom";


function Products(){
    return(
        <div>
            <h1>Products Page</h1>
            <nav>
                <Link to="electronics">Electronics</Link>
                <Link to="clothing">Clothing</Link>
                <Link to="furniture">Furniture</Link>
            </nav>
            <Outlet/>
        </div>
    )
}

export default Products