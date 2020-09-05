import React from "react"
import { connect } from "react-redux";
import {
  addContact,
  changeInFocus,
  changeFullname,
  changeNumber,
  changeAddNumber,
  changeCompany,
  changeEmail,
  changeType
} from './../../Redux/reducers/edit-reducer'
import Contacts from './CardEdit';

class CardEditContainer extends React.Component{

  addContact = (fullname,number,add_number,type,company,email) => {
    this.props.addContact(fullname,number,add_number,type,company,email)
  }

  render(){
    return(
      <Contacts {...this.props} addContact={this.addContact}/>
    )
  }
}

let mapStateToProps=(state)=>{
  return {
    inFocus:state.edit_state.inFocus,
    fullname:state.edit_state.fullname,
    number:state.edit_state.number,
    add_number:state.edit_state.add_number,
    company:state.edit_state.company,
    email:state.edit_state.email,
    type:state.edit_state.type,
  }
}

export default connect(mapStateToProps,{addContact,changeInFocus,changeFullname,changeNumber,changeAddNumber,changeCompany,changeEmail,changeType})(CardEditContainer)
