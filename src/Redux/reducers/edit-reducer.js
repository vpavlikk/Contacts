import { API } from "../../api"

const CHANGE_INFOCUS = "CHANGE-INFOCUS"
const CHANGE_FULLNAME = "CHANGE-FULLNAME"
const CHANGE_NUMBER = "CHANGE-NUMBER"
const CHANGE_ADD_NUMBER = "CHANGE-ADD-NUMBER"
const CHANGE_COMPANY = "CHANGE-COMPANY"
const CHANGE_EMAIL = "CHANGE-EMAIL"
const CHANGE_TYPE = "CHANGE-TYPE"
const SET_MESSAGE = "SET-MESSAGE"

let initialState = {
  inFocus: false,
  fullname:'',
  number:'',
  add_number:'',
  company:'',
  email:'',
  type:'Type',
}

const editReducer = (state = initialState, action) => {
    switch(action.type){
        default: return state
        case CHANGE_INFOCUS : {
          return{ ...state, inFocus:action.newValue }
        }
        case CHANGE_FULLNAME : {
          return{ ...state,fullname:action.newFullName }
        }
        case CHANGE_NUMBER : {
          return{ ...state, number:action.newNumber }
        }
        case CHANGE_ADD_NUMBER : {
          return{ ...state, add_number:action.newAddNumber }
        }
        case CHANGE_COMPANY : {
          return{ ...state, company:action.newCompany }
        }
        case CHANGE_EMAIL : {
          return{ ...state, email:action.newEmail }
        }
        case CHANGE_TYPE : {
          return{ ...state, type:action.newType }
        }
        case SET_MESSAGE : {
          return{ ...state, message:action.newMessage }
        }
    }
}
export const changeInFocus = (newValue)=>{return{type:CHANGE_INFOCUS,newValue}}
export const changeFullname = (newFullName)=>{return{type:CHANGE_FULLNAME,newFullName}}
export const changeNumber = (newNumber)=>{return{type:CHANGE_NUMBER,newNumber}}
export const changeAddNumber = (newAddNumber)=>{return{type:CHANGE_ADD_NUMBER,newAddNumber}}
export const changeCompany = (newCompany)=>{return{type:CHANGE_COMPANY,newCompany}}
export const changeEmail = (newEmail)=>{return{type:CHANGE_EMAIL,newEmail}}
export const changeType = (newType)=>{return{type:CHANGE_TYPE,newType}}

export const addContact = (fullname,number,add_number,type,company,email) => async(dispatch) => {
  await API.addContact(fullname,number,add_number,type,company,email)
}

export default editReducer;
