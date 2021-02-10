import React from 'react'
import ContactChangeReduxForm from './ContactChange'
import { useLocation } from 'react-router-dom';

const ContactChangeContainer=()=> {
  let location = useLocation();
  const submit = (ContactChangeFormDataObject) => {
    ContactChangeFormDataObject.id = location.aboutProps.id
    location.aboutProps.updateContact(ContactChangeFormDataObject)
  }
    return (
    <ContactChangeReduxForm onSubmit={submit} />
    )
}

export default ContactChangeContainer
