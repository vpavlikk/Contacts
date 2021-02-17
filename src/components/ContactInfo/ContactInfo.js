import React from 'react'
import "./ContactInfo.sass"
import { NavLink } from 'react-router-dom';

let ContactInfo =(props)=> {
    return(
         <div className="info-block">

            <div className="ava">
              <img className="contact-info-ava" src={props.location.aboutProps.ava_src} alt=""/>
            </div>
            <div>
              <label className="label-info">FULLNAME</label>
              <p className="info">{props.match.params.fullname}</p>
            </div>
            <div>
              <label className="label-info">NUMBER</label>
              <p className="info">{props.location.aboutProps.number}</p>
            </div>
            <div>
              <label className="label-info">ADDITIONAL NUMBER</label>
              <p className="info">{props.location.aboutProps.add_number}</p>
            </div>
            <div>
              <label className="label-info">COMPANY</label>
              <p className="info">{props.location.aboutProps.company}</p>
            </div>
            <div>
              <label className="label-info">EMAIL</label>
              <p className="info">{props.location.aboutProps.email}</p>
            </div>
            <div>
              <label className="label-info">TYPE</label>
              <p className="info">{props.location.aboutProps.type}</p>
            </div>
            <div className="back-btn-block">
              <NavLink className="back-btn" to='/contacts'>Back</NavLink>
            </div>
          </div>
    )
}

export default ContactInfo
