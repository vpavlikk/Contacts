import React from 'react'
import "./ContactInfo.sass"
import ava from "./ava.png"
import { useLocation,NavLink } from 'react-router-dom';

let ContactInfo =()=> {
  let location = useLocation();
    return(
         <div>
            <div className="ava-holder-editpage">
              <img src={ava} alt=""/>
            </div>
            <div>
              <lable>FULLNAME</lable>
              <p className="info">{location.aboutProps.fullname}</p>
            </div>
            <div>
              <lable>NUMBER</lable>
              <p className="info">{location.aboutProps.number}</p>
            </div>
            <div>
              <lable>ADDITIONAL NUMBER</lable>
              <p className="info">{location.aboutProps.add_number}</p>
            </div>
            <div>
              <lable>COMPANY</lable>
              <p className="info">{location.aboutProps.company}</p>
            </div>
            <div>
              <lable>EMAIL</lable>
              <p className="info">{location.aboutProps.email}</p>
            </div>
            <div>
              <lable>TYPE</lable>
              <p className="info">{location.aboutProps.type}</p>
            </div>
            <NavLink className="back-btn" to='/contacts'><span>Back</span></NavLink>
          </div>
    )
}

export default ContactInfo
