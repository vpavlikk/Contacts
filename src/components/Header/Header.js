import React from 'react'
import './Header.sass'
import { NavLink, useLocation } from 'react-router-dom';

const Header = () => {
    let location = useLocation();

    return(
    <header  className="header">
        <div className={`menu-item ${location.pathname==='/view'?'selected':null}`}><NavLink to='/view'>CONTACTS</NavLink></div>
        <div className={`menu-item ${location.pathname==='/edit'?'selected':null}`}><NavLink to='/edit'>ADD NEW</NavLink></div>
    </header>)
}

export default Header;