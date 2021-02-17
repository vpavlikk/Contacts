import React, {useState} from 'react'
import CardAddingReduxForm from './CardAdding'
import { connect } from "react-redux";
import { addContact } from './../../Redux/reducers/contacts-reducer'

const CardAddingContainer = ( props ) => {
  const [ava_src, setAvaSrc] = useState(props.default_ava_src)
  const submit = (cardAddingFormDataObject) => {
    cardAddingFormDataObject.ava_src = ava_src
    props.addContact(cardAddingFormDataObject)
  }
    return (
      <CardAddingReduxForm ava_src={ava_src} setAvaSrc={setAvaSrc} onSubmit={submit} />
    )
}

let mapStateToProps = (state) => {
  return {
    default_ava_src: state.contacts_state.default_ava_src
  }
}

export default connect(mapStateToProps,{addContact})(CardAddingContainer)

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
