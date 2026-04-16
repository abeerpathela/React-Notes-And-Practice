import React from "react";
import { NavLink } from "react-router-dom";


function NavBar(){
    return(
        <div className="flex w-full bg-black text-white justify-evenly p-2">
            <p>About</p>
            <p>Home</p>
            <p>Products</p>
            <p>SignUp</p>
            {/* <NavLink>About</NavLink>
            <NavLink>Home</NavLink>
            <NavLink>Products</NavLink>
            <NavLink>ViewMore</NavLink> */}
        </div>
    )
}

export default NavBar