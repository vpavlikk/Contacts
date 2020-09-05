import {API} from '../../api'

const CHACK_IS_LOGGED_IN = "CHECK-IS-LOGGED-IN"
const SET_EMAIL="SET-EMAIL"
const SET_PASSWORD="SET-PASSWORD"
const SET_PASSWORD_TOGGEL="SET-PASSWORD-TOGGLE"
// let check = API.checkIsLoggedIn().then(response=>response.login)
let initialState = {
  isLoggedIn: false,
  email:"",
  password:"",
  passwordToggle:false
}

const LoginReducer = (state = initialState, action) => {
  switch (action.type){
    default: return state
    case CHACK_IS_LOGGED_IN : {
      return {...state,isLoggedIn:action.newValue}
    }
    case SET_EMAIL : {
      return {...state,email:action.email}
    }
    case SET_PASSWORD : {
      return {...state,password:action.password}
    }
    case SET_PASSWORD_TOGGEL : {
      return {...state,passwordToggle:action.newValue}
    }
  }
}

export const setIsLoggedIn =(newValue)=>{ return {type:CHACK_IS_LOGGED_IN,newValue} }
export const setEmail =(email)=>{ return {type:SET_EMAIL,email} }
export const setPassword =(password)=>{ return {type:SET_PASSWORD,password} }
export const setPasswodToggle =(newValue)=>{ return {type:SET_PASSWORD_TOGGEL,newValue} }

//
// export const isLoggedIn = () => async (dispatch) => {
//   let response = await API.checkIsLoggedIn()
//   dispatch(setIsLoggedIn(response.login))
//   console.log(response.login+" !!!!!!!")
// }

export const Logining =(email,password)=>async(dispatch)=>{
  let response = await API.login(email,password)
  dispatch(setIsLoggedIn(true))
}

export default LoginReducer;
