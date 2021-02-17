import React from 'react'
import {connect} from 'react-redux'
import LoginForm from './LoginForm'
import {setEmail,setPassword,setPasswordToggle,Logining} from '../../Redux/reducers/login-reducer'
import {getEmail, getPassword, getPasswordToggle} from '../../Redux/reducers/login-selectors'

const LoginConteiner =(props)=>{
  return(
    <LoginForm {...props}/>
  )
}


let mapStateToProps =(state)=>{
  return{
    email: getEmail(state),
    password: getPassword(state),
    passwordToggle: getPasswordToggle(state)
  }
}

export default connect(mapStateToProps,{setEmail,setPassword,setPasswordToggle,Logining})(LoginConteiner)
