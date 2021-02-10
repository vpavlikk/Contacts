import {API} from '../../api'

const CHACK_IS_LOGGED_IN = "CHECK-IS-LOGGED-IN"
const SET_EMAIL="SET-EMAIL"
const SET_PASSWORD="SET-PASSWORD"
const SET_PASSWORD_TOGGEL="SET-PASSWORD-TOGGLE"

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
      return {...state,isLoggedIn:action.isLogedIn,email:action.email}
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

export const setIsLoggedIn =(isLogedIn,email)=>{ return {type:CHACK_IS_LOGGED_IN,isLogedIn,email} }
export const setEmail =(email)=>{ return {type:SET_EMAIL,email} }
export const setPassword =(password)=>{ return {type:SET_PASSWORD,password} }
export const setPasswordToggle =(newValue)=>{ return {type:SET_PASSWORD_TOGGEL,newValue} }

export const Logining =(email,password)=>async(dispatch)=>{
  API.login(email,password).then(response =>{
      if(response.userId){
        alert(response.message)
        API.checkIsLoggedIn().then(response=>
          dispatch(setIsLoggedIn(response.login)),
        )
      }
    }
  )
}

export const IsloggedInPageMount=()=>async(dispatch)=>{
  API.checkIsLoggedIn().then(response=>{
    if(response.login===true){
      dispatch(setIsLoggedIn(response.login,response.items.email))
    }else{
      dispatch(setIsLoggedIn(response.login,''))
    }
  })
}

export const LogOut=()=>async(dispatch)=>{
    API.logOut().then(response=>{
      if(response.message){
        alert(response.message)
        API.checkIsLoggedIn().then(response=>{
          dispatch(setIsLoggedIn(response.login))
        })
      }
    }
  )
}

export default LoginReducer;
