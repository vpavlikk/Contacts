import React from 'react'
import './AuthForm.sass'
import { NavLink } from 'react-router-dom'

const LoginForm = (props) => {
    const onEmailChangeHandler = (e) =>{
      props.setEmail(e.target.value)
    }
    const onPasswordChangeHandler = (e) =>{
      props.setPassword(e.target.value)
    }
    const onPasswordTypeChange=()=>{
      props.setPasswordToggle(!props.passwordToggle)//змінює значення passwordToggle на протележне
    }
    const useLogin = () => {
      props.Logining(props.email, props.password)
    }
    return(
      <div className="auth-pages">
        <div className='content-holder'>
          <input className='top-edit-input' onChange={onEmailChangeHandler} name='email' placeholder='Email'/>
          <div className="password-holder-login">
            <input type={props.passwordToggle?"text":"password"}// змінює зірки на пароль який ми вводимо
              onChange={onPasswordChangeHandler}
              name='password'
              className='login-pswd-fld'
              placeholder='Password'/>
            <button className='login-pswd-show-btn' onClick={onPasswordTypeChange}>{props.passwordToggle?"HIDE":"SHOW"}</button>
          </div>
          <button className='sbmt-btn' onClick={useLogin}>Login</button>
          <div>
            <NavLink className="auth-links" to='/register'>Do not have account? Sign Up!</NavLink>
          </div>
        </div>
      </div>
    )
}

export default LoginForm
