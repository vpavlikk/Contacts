import React from 'react'
import {connect} from 'react-redux'
import LoginForm from './LoginForm'
import {setEmail,setPassword,setPasswodToggle,Logining} from '../../Redux/reducers/login-reducer'



const LoginConteiner =(props)=>{
  return(
    <LoginForm {...props}/>
  )
}


let mapStateToProps =(state)=>{
  return{
    email:state.login_state.email,
    password:state.login_state.password,
    passwordToggle:state.login_state.passwordToggle
  }
}

export default connect(mapStateToProps,{setEmail,setPassword,setPasswodToggle,Logining})(LoginConteiner)
