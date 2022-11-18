import React from "react";
import LOGO from '../img/LOGOwhite.png'

const Footer = () => {
    return (
        <footer className="Footer">
                <img src={LOGO} alt="" />
                <p>
                    <i className="fa-regular fa-copyright"></i>
                    2020 Kasa. All rights reserved
                </p>
        </footer>
    );
};

export default Footer;