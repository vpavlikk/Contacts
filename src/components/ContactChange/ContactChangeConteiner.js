import React, { useState } from 'react'
import ContactChangeReduxForm from './ContactChange'
import { useLocation } from 'react-router-dom';
import { updateContact } from './../../Redux/reducers/contacts-reducer'
import { connect } from "react-redux";

const ContactChangeContainer = (props) => {
  let location = useLocation();
  // const [ava_src, setAvaSrc] = useState(props.default_ava_src)//use default location img while changing current contact
  const [ava_src, setAvaSrc] = useState(location.aboutProps.ava_src)//use current location img while changing current contact
  const submit = (ContactChangeFormDataObject) => {
    ContactChangeFormDataObject.id = location.aboutProps.id
    props.updateContact(ContactChangeFormDataObject)
  }
    return (
      <ContactChangeReduxForm
        ava_src={ava_src}
        setAvaSrc={setAvaSrc}
        onSubmit={submit}
        fullname={location.aboutProps.fullname}
        number={location.aboutProps.number}
        add_number={location.aboutProps.add_number}
        company={location.aboutProps.company}
        email={location.aboutProps.email}
        type={location.aboutProps.type}
        />
    )
}

let mapStateToProps = (state) => {
  return {
    default_ava_src: state.contacts_state.default_ava_src
  }
}

export default connect(mapStateToProps,{ updateContact })(ContactChangeContainer)
