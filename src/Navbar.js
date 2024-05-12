import React from "react";
import Slide1 from "./Slide1.js";

function Navbar(){
    return(
        <div>
            <div className="parent">
                <h3>PICK 'N' PACK</h3>
                <ul>
                    <li>Home</li>
                    <li>Vegetables</li>
                    <li>Fruits</li>
                    <li>Combo Store</li>
                    <li>About Us</li>
                    <li>Contact</li>
                </ul>
            </div>
            <Slide1 />
            <Slide1 />
        </div>
    )
}

export default Navbar;