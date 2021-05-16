import React from 'react';
import {
  connect
} from "react-redux";
import App from './App'
import {
  IsloggedInPageMount,
  LogOut
} from './Redux/reducers/login-reducer'
import {
  getIsLoggedIn,
  getValidEmail
} from './Redux/reducers/login-selectors'

const AppConteiner = (props) => {
  return ( <
    App {
      ...props
    }
    />
  )
}

let mapStateToProps = (state) => {
  return {
    isLoggedIn: getIsLoggedIn(state),
    validEmail: getValidEmail(state)
  }
}

export default connect(mapStateToProps, {
  IsloggedInPageMount,
  LogOut
})(AppConteiner);
