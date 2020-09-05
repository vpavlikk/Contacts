import React,{useState} from 'react';
import './AuthForm.sass'
import { NavLink } from 'react-router-dom'
import {API} from '../../api'

let RegisterForm = () => {
  const [registerForm,setRegisterForm] = useState({email:"",password:""})
  const onEmailChangeHandler=(event)=>{
    setRegisterForm({
      ...registerForm,
      email: event.target.value
    })
  }
  const onPasswordChangeHandler=(event)=>{
    setRegisterForm({
      ...registerForm,
      password: event.target.value
    })
  }
  const onSubmitHandler=()=>{
    API.register(registerForm.email,registerForm.password)
  }
    return(
        <>
            <div >
                <input onChange={onEmailChangeHandler} className='edit-input' placeholder='Email'/>
            </div>
            <div >
                <input onChange={onPasswordChangeHandler} className='edit-input' placeholder='password'/>
            </div>
            <div >
                <input className='edit-input' placeholder='confirm password'/>
            </div>
            <div>
                <button  onClick={onSubmitHandler}className="sbmt-btn">Sign Up</button>
            </div>
            <div style={{textAlign: "center"}}>
              <NavLink to='/login'>Already have account? Login!</NavLink>
            </div>
        </>
    )
}

export default RegisterForm
