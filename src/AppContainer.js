import React,{useEffect} from 'react';
import { connect } from "react-redux";
import App from './App'
import {IsloggedInPageMount} from './Redux/reducers/login-reducer'

const AppConteiner = (props) =>{

  useEffect(()=>{
    props.IsloggedInPageMount()
  },[])

  return(
    <App {...props}/>
  )
}

let mapStateToProps =(state)=>{
  return{
    isLoggedIn: state.login_state.isLoggedIn
  }
}

export default connect(mapStateToProps,{IsloggedInPageMount})(AppConteiner);
