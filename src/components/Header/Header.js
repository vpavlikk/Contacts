import React from 'react'
import './Header.sass'
import { NavLink, useLocation } from 'react-router-dom';

const Header = () => {
    let location = useLocation();

    return(
    <header  className="header">
        <div className={`menu-item ${location.pathname==='/contacts'?'selected':null}`}>
          <NavLink to='/contacts'>
            <span>
              CONTACTS
            </span>
          </NavLink>
        </div>
        <div className={`menu-item ${location.pathname==='/edit'?'selected':null}`}>
          <NavLink to='/edit'>
            <span>
              ADD NEW
            </span>
          </NavLink>
        </div>
    </header>)
}

export default Header;
