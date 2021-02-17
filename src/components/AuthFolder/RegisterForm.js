import React,{useState} from 'react';
import './AuthForm.sass'
import { NavLink } from 'react-router-dom'
import {API} from '../../api'

let RegisterForm = () => {
  const [registerForm,setRegisterForm] = useState(
    {
      email: "",
      password: "",
      confirm: ""
    }
  )

  const onEmailChangeHandler = ( event ) => {
    setRegisterForm({
      ...registerForm,
      email: event.target.value
    })
  }

  const onPasswordChangeHandler = ( event ) => {
    setRegisterForm({
      ...registerForm,
      password: event.target.value
    })
  }

  const onConfirmChangeHandler = ( event ) => {
    setRegisterForm({
      ...registerForm,
      confirm: event.target.value
    })
  }

  const onSubmitHandler = () => {
    if(registerForm.password === registerForm.confirm){
      API.register(registerForm.email, registerForm.password).then(response => {
        alert(response.data.message)
      }).catch(error => {
        if(error.response.data.message && !error.response.data.errors){
          alert(error.response.data.message)
        } else {
          if(error.response.data.errors.length > 1){
            alert(error.response.data.errors[0].msg)
            alert(error.response.data.errors[1].msg)
          } else {
            alert(error.response.data.errors[0].msg)
            // console.log(error.response.status)
            // console.log(error.response.headers)
          }
        }
      })
    } else {
      alert("Passwords are not same")
    }
  }

    return(
      <div className="auth-pages">
        <div className='content-holder'>
          <input onChange={onEmailChangeHandler} className='top-edit-input' placeholder='Email'/>
          <input onChange={onPasswordChangeHandler} className='edit-input' placeholder='Password'/>
          <input onChange={onConfirmChangeHandler} className='edit-input' placeholder='Confirm password'/>
          <button onClick={onSubmitHandler}className="sbmt-btn">Sign Up</button>
          <div><NavLink className="auth-links" to='/login'>Already have account? Login!</NavLink></div>
        </div>
      </div>  
    )
}

export default RegisterForm
