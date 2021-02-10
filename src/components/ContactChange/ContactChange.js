import React from 'react'
import "./ContactChange.sass"
import ava from "./ava.png"
import { Field, reduxForm } from 'redux-form'

let ContactChange =(props)=> {
    return(
       <form onSubmit={props.handleSubmit}>{
         <div>
             <div className="ava-holder-editpage">
                  <img src={ava} alt=""/>
             </div>
             <div>
              <Field className="edt-input" name="fullname" component="input" type="text" placeholder="New fullname"/>
             </div>
            <div>
              <Field className="edt-input" name="number" component="input" type="text" placeholder="New number"/>
            </div>
            <div>
              <Field className="edt-input" name="add_number" component="input" type="text" placeholder="New additional number"/>
            </div>
            <div>
              <Field className="edt-input" name="company" component="input" type="text" placeholder="New company"/>
            </div>
            <div>
              <Field className="edt-input" name="email" component="input" type="email" placeholder="New email"/>
            </div>
            <div>
              <Field className="edt-input" name="type" component="select">
                <option value="" hidden>Type</option>
                <option value="Work">Work</option>
                <option value="Friends">Friends</option>
                <option value="Family">Family</option>
                <option value="Other">Other</option>
              </Field>
            </div>
            <button className="sbmt-btn" type="submit">Uppdate</button>
          </div>
      }</form>
    )
}

const ContactChangeReduxForm = reduxForm({
  // a unique name for the form
  form: 'contact-change'
})(ContactChange)

export default ContactChangeReduxForm
