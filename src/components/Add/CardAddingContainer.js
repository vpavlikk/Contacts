import React from 'react'
import CardAddingReduxForm from './CardAdding'
import { connect } from "react-redux";
import {addContact} from './../../Redux/reducers/contacts-reducer'

const CardAddingContainer=(props)=> {
  const submit = (cardAddingFormDataObject) => {
    props.addContact(cardAddingFormDataObject)
  }
    return (
    <CardAddingReduxForm onSubmit={submit} />
    )
}

export default connect(null,{addContact})(CardAddingContainer)

// import React from "react"
// import { connect } from "react-redux";
// import {
//   addContact,
//   changeInFocus,
//   changeFullname,
//   changeNumber,
//   changeAddNumber,
//   changeCompany,
//   changeEmail,
//   changeType
// } from './../../Redux/reducers/edit-reducer'
// import Contacts from './CardEdit';
//
// class CardEditContainer extends React.Component{
//   render(){
//     return(
//       <Contacts {...this.props} />
//     )
//   }
// }
//
// let mapStateToProps=(state)=>{
//   return {
//     inFocus:state.edit_state.inFocus,
//     fullname:state.edit_state.fullname,
//     number:state.edit_state.number,
//     add_number:state.edit_state.add_number,
//     company:state.edit_state.company,
//     email:state.edit_state.email,
//     type:state.edit_state.type,
//   }
// }
//
// export default connect(mapStateToProps,{addContact,changeInFocus,changeFullname,changeNumber,changeAddNumber,changeCompany,changeEmail,changeType})(CardEditContainer)
