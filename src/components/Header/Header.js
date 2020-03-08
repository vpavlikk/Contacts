import React from 'react'
import './Header.sass'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return(
    <header  className="header">
        <div className="menu-item selected"><NavLink to='/view'>CONTACTS</NavLink></div>
        <div className="menu-item"><NavLink to='/edit'>ADD NEW</NavLink></div>
    </header>)
}

export default Header;