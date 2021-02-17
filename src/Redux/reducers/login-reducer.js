import {API} from '../../api'

const CHACK_IS_LOGGED_IN = "CHECK-IS-LOGGED-IN"
const SET_EMAIL="SET-EMAIL"
const SET_PASSWORD="SET-PASSWORD"
const SET_PASSWORD_TOGGEL="SET-PASSWORD-TOGGLE"

let initialState = {
  isLoggedIn: false,
  email: "",
  validEmail: "",
  password: "",
  passwordToggle: false
}

const loginReducer = (state = initialState, action) => {
  switch (action.type){
    default: return state
    case CHACK_IS_LOGGED_IN : {
      return {...state, isLoggedIn: action.isLogedIn, validEmail: action.validEmail}
    }
    case SET_EMAIL : {
      return {...state, email: action.email}
    }
    case SET_PASSWORD : {
      return {...state, password: action.password}
    }
    case SET_PASSWORD_TOGGEL : {
      return {...state, passwordToggle: action.newValue}
    }
  }
}

export const setIsLoggedIn = ( isLogedIn,validEmail ) => { return { type: CHACK_IS_LOGGED_IN, isLogedIn, validEmail } }
export const setEmail = ( email ) => { return { type: SET_EMAIL, email } }
export const setPassword = ( password ) => { return { type: SET_PASSWORD, password } }
export const setPasswordToggle = ( newValue ) => { return { type:SET_PASSWORD_TOGGEL, newValue } }

export const Logining = ( email, password ) => ( dispatch ) => {
  API.login( email, password ).then( response => {
      if( response.data.userId ) {
        alert( response.data.message )
        dispatch( setIsLoggedIn( response.data.login, response.data.email ) )
      }
    }).catch(error => {
      if(error.response.data.message && !error.response.data.errors){
        alert(error.response.data.message)
      } else {
        alert(error.response.data.errors[0].msg)
        // console.log(error.response.status)
        // console.log(error.response.headers)
      }
    })
}

export const IsloggedInPageMount = () => ( dispatch ) => {
  API.checkIsLoggedIn().then( response => {
    if( response.login === true ){
       dispatch(setIsLoggedIn( response.login, response.items.email ))
    } else {
      dispatch(setIsLoggedIn( response.login, '' ))
    }
  })
}

export const LogOut = () => ( dispatch ) => {
    API.logOut().then( response => {
      dispatch(setIsLoggedIn( response.login, '' ))
      dispatch(setEmail(""))
      dispatch(setPassword(""))
    }
  )
}

export default loginReducer;
