import React from "react";
import { NavLink } from "react-router-dom";

const Error404 = () => {
    return (
        <main className="ErrorMain">
            <div className="ErrorTitle">
                <h1>404</h1>
                <h2>Oups! la page que vous avez demandez n'existe pas.</h2>
            </div>
            <div className="HomeLink">
                <NavLink to={'/'}>
                    Retourner sur la page d'accueil
                </NavLink>
            </div>
        </main>
    );
};

export default Error404;