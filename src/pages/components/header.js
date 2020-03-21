import React, { Component } from 'react';
import "./header.scss";
import logo from "../../../images/logo.png";
import {Link, NavLink} from "react-router-dom";

class Header extends Component{
    render(){
        return(
            <header className="Header">
                <img src={logo} width={250}/>
                <nav>
                    <ul>
                        <li><NavLink activeClassName="is-selected" exact to="/">inicio</NavLink></li>
                        <li><NavLink activeClassName="is-selected" to="/videos">videos</NavLink></li>
                        <li><NavLink activeClassName="is-selected" to="/contacto">contacto</NavLink></li>
                        <li><NavLink activeClassName="is-selected" to="/perfil">perfil</NavLink></li>
                    </ul>
                </nav>
            </header>
        )
    }
} 

export default Header;