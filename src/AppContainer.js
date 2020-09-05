import React from 'react';
import { connect } from "react-redux";
import App from './App'
// import {isLoggedIn} from './Redux/reducers/login-reducer'

const AppConteiner = (props) =>{
  return(
    <App {...props}/>
  )
}

let mapStateToProps =(state)=>{
  return{
    isLoggedIn: state.login_state.isLoggedIn
  }
}

export default connect(mapStateToProps)(AppConteiner);
