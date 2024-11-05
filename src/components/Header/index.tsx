import React from "react";
import SearchBox from "./SearchBox/index";
import {Link, NavLink} from "react-router-dom";

interface HeaderProps {
    appName: string;
    inputChange:any;
    textSearch:string;
}

const Header = ({ appName,inputChange,  textSearch}: HeaderProps) => {
    return (
        <header className="header">
            <div className="header__title">
                <h1>{appName}</h1>
            </div>
            <div className="header__search">
                <SearchBox  inputFunction = {inputChange} textSearch={textSearch}/>
                <p className="header__search--info">La busqueda debe ser en el nombre del pais en ingles</p>
            </div>
            <nav className="header__nav">
                <NavLink to="/Inicio" className="header__nav--linkInicio">Inicio</NavLink>
                <NavLink to="/Continente_Europeo" className="header__nav--linkEuropa">Europa</NavLink>
            </nav>

        </header>
    )
}

export default Header;