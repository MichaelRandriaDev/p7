import React from "react";
// import { NavLink } from "react-router-dom";
import Logo  from '../img/LOGO.png';

const Navbar = () => {
    return (
        <header className="NavBar">
            <nav>
                <img src={Logo} alt="logo-Kasa" />
                <ul>
                    <li>
                        Accueil
                    </li>
                    <li>
                        A propos
                    </li>    
                </ul> 
            </nav>
        </header>
    );
};

export default Navbar;
