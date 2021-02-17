import React from 'react'
import "./ContactChange.sass"
import { Field, reduxForm } from 'redux-form'
    // {touched && error ? <label className="errors-label">{error}</label> : null }//если отдельный инпут был выбран и существует ошибка после проверки содержимого этого инпута
function validate (values) {
  const errors = {}

  if (!values.fullname) {
    errors.fullname = 'Fullname required !'
  } else if (values.fullname.length > 15) {
    errors.fullname = 'Fullname must be 15 characters or less!'
  }

  if (!values.number) {
    errors.number = 'Number required !'
  } else if (!values.number.length === 17) {
    errors.number = 'Number must be 17 characters !'
  } else if (!/^[+\d{2}(\d{3})\d{3}\-\d{2}\-\d{2}]{17}$/.test(values.number)) {
    errors.number = 'Invalid number ! Example number: +38(000)000-00-00'
  }

  if (values.add_number) {
    if (!values.add_number.length === 17) {
      errors.add_number = 'Additional number must be 17 characters !'
    }
    if (!/^[+\d{2}(\d{3})\d{3}\-\d{2}\-\d{2}]{17}$/.test(values.add_number)) {
      errors.add_number = 'Invalid additional number ! Example number: +38(000)000-00-00'
    }
  }

  if (values.email) {
    if (!/^[\w-.]+@[\w-]+.[a-z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address !'
    }
  }

  if (values.type) {
    if (!/^[a-z]{4,}$/i.test(values.type)) {
      errors.type = 'Invalid type !'
    }
  }

  return errors
}

const renderChangeField = ({
  type,
  placeholder,
  input,
  meta: { touched, error }
}) => {
  return (
    <>
      <div className="input-field-block">
        <label className="input-name-label">{input.name.toUpperCase()}</label>
        <input {...input} className="input-field" type={type} placeholder={placeholder}/>
      </div>
      {touched && error ? <label className="errors-label">{error}</label> : null}
    </>
  )
}

let ContactChange = ( props ) => {

  function dragSrartHandler (e) {
    e.preventDefault()
    e.target.classList.toggle("on-drag-start-change",true)
  }

  function dragLeaveHandler (e) {
    e.preventDefault()
    e.target.classList.toggle("on-drag-start-change",false)
  }

  function onDropHandler (e) {
    e.preventDefault()
    e.target.classList.toggle("on-drag-start-change",false)
    let files = [...e.dataTransfer.files]
    if (files.length > 1) {
      alert("Only one file is permitted to use for contact avatar")
      files = null
    }
    const reader = new FileReader()
    // let formData = new FormData()
    // formData.append('url',files[0])
    // props.setAvaSrc(URL.createObjectURL(files[0]))
    if (files) {
      reader.readAsDataURL(files[0])
      reader.onload = function () {
        props.setAvaSrc(reader.result)
      }
      reader.onerror = function (event) {
        alert("Failed to read file!\n\n" + reader.error)
        reader.abort()
      }
    }
  }

  return(
    <form onSubmit={props.handleSubmit}>
      <div className="page">
        <div className="holder-ava">
          <img
            className="contact-change-ava"
            onDragStart={e => dragSrartHandler(e)}
            onDragOver={e => dragSrartHandler(e)}
            onDragLeave={e => dragLeaveHandler(e)}
            onDrop={e => onDropHandler(e)}
            src={props.ava_src}
            alt=""
          />
        </div>
        <Field name="fullname" component={renderChangeField} type="text" placeholder={"previos: " + props.fullname}/>
        <Field name="number" component={renderChangeField} type="text" placeholder={"previos: " + props.number}/>
        <Field name="add_number" component={renderChangeField} type="text" placeholder={"previos: " + props.add_number}/>
        <Field name="company" component={renderChangeField} type="text" placeholder={"previos: " + props.company}/>
        <Field name="email" component={renderChangeField} type="email" placeholder={"previos: " + props.email}/>
        <Field name="type" component={renderChangeField} list="types" placeholder={"previos: " + props.type}/>
        <datalist id="types">
          <option value="Work">Work</option>
          <option value="Friends">Friends</option>
          <option value="Family">Family</option>
          <option value="Other">Other</option>
        </datalist>
        <div className="block-sbmt">
          <button className="btn-sbmt" type="submit">Change</button>
          <button className="btn-sbmt" type="button" onClick={props.reset}>Clear</button>
        </div>
      </div>
    </form>
  )
}

const ContactChangeReduxForm = reduxForm({
  form: 'contact-change',
  validate,
})(ContactChange)

export default ContactChangeReduxForm
