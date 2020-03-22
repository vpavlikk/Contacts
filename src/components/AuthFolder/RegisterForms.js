import React, { useState } from 'react'
import './AuthForm.sass'
import { NavLink } from 'react-router-dom'

let RegisterForm = () => {

    return(
        <>
            <div >
                <input className='edit-input' placeholder='Email'/>
            </div>
            <div >
                <input className='edit-input' placeholder='password'/>
            </div>
            <div >
                <input className='edit-input' placeholder='confirm password'/>
            </div>
            <div>
                <button  className="sbmt-btn">Sign Up</button>
            </div>
            <div style={{textAlign: "center"}}><NavLink to='/login'>Already have account? Login!</NavLink></div>
        </>
    )
}

export default RegisterForm