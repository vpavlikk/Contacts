import React from 'react';
import { connect } from "react-redux";
import App from './App'
import {IsloggedInPageMount,LogOut} from './Redux/reducers/login-reducer'

const AppConteiner = (props) =>{
  return(
    <App {...props}/>
  )
}

let mapStateToProps =(state)=>{
  return{
    isLoggedIn: state.login_state.isLoggedIn,
    validEmail: state.login_state.validEmail
  }
}

export default connect(mapStateToProps,{IsloggedInPageMount,LogOut})(AppConteiner);
