import React, { useState } from 'react'
import './AuthForm.sass'
import { NavLink } from 'react-router-dom'
import { API } from '../../api'

const LoginForm = () => {
    let [loginForm, setLoginForm] = useState({email:"", password:""})
    let [passwordToggle, setPassordToggle] = useState(false)
    const onPasswordChangeHandler = (e) =>{
        setLoginForm({password: e.target.value, email: loginForm.email})
    }
    const onEmailChangeHandler = (e) =>{
        setLoginForm({email: e.target.value, password: loginForm.password})
    }
    const onPasswordTypeChange=()=>{
        setPassordToggle(!passwordToggle)
    }
    const useLogin = () => {
        console.log(loginForm)
        API.login(loginForm.email, loginForm.password)
    }
    // let [emailInput, setEmailInput] = useState("")
    // let [passwordInput, setPasswordInput] = useState("")
    
    // const onEmailChangeHander = (e) =>{
    //     setEmailInput(e.target.value)
    // }
    // const onPasswordChangeHandler = (e) =>{
    //     setPasswordInput(e.target.value)
    // } 
    return(
        <>
            <div >
                <input onChange={onEmailChangeHandler} name='email' className='edit-input' placeholder='Email'/>
            </div >
            <div>
                <div>
                    <input style={{width:'70%'}} type={passwordToggle?"text":"password"} 
                    onChange={onPasswordChangeHandler} 
                    name='password' 
                    className='edit-input' 
                    placeholder='password'/>
                    <button onClick={onPasswordTypeChange}>{passwordToggle?"HIDE":"SHOW"}</button>
                </div>
            </div>
            <div >
                <button onClick={useLogin} className='sbmt-btn'>Login</button>
            </div>
            <div  style={{textAlign:'center'}}><NavLink to='/register' >Do not have account? Sign Up!</NavLink></div>
        </>
    )
}

export default LoginForm