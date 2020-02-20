import React from 'react'
import './Header.sass'

const Header = () => {
    return(
    <header  className="header">
        <div className="menu-item selected">VIEW</div>
        <div className="menu-item">ADD</div>
    </header>)
}

export default Header;