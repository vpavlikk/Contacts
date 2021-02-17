import React, {useEffect} from 'react'
import './Header.sass'
import { NavLink, useLocation } from 'react-router-dom';

const Header = (props) => {

    let location = useLocation();

    useEffect(()=>{
      console.log("render Header")
    },[props.email])

    return(
    <header  className="header">
        <div className="nav-btn-container">
          <NavLink className={` nav-btn-contacts ${location.pathname === '/contacts' ? 'selected' : null} `} to='/contacts'>
            <span>
              CONTACTS
            </span>
          </NavLink>
          <NavLink className={` nav-btn-add ${location.pathname === '/add' ? 'selected' : null} `} to='/add'>
            <span>
              ADD NEW
            </span>
          </NavLink>
        </div>
        <div className="email-logout-container">
          <p className="email-holder">{props.email}</p>
          <button className="btn-logout" onClick={props.LogOut}>Log Out</button>
        </div>

    </header>
  )
}

export default Header;
