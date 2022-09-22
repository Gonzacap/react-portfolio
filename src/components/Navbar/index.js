import React, {useState, useEffect} from "react";
import style from "./style"; 

function Navbar() {

    return (
        <nav className="navbar navbar-dark bg-dark" id="nav">
            <a className="navbar-brand Brand" href="#" >
                <img 
                    src="img/img-nav.jpg" 
                    width="30" height="30" 
                    className="d-inline-block align-center m-1" 
                    alt="" 
                    loading="lazy" 
                />
                Desarrollador Fullstack - Programador proactivo
            </a>
        </nav>
    );
};

export default Navbar;