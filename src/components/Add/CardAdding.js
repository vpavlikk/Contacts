import React from 'react'
import "./CardAdding.sass"
import { Field, reduxForm } from 'redux-form'

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

const renderAddField = ({
  type,
  placeholder,
  input,
  meta: { touched, error }
}) => {
  return (
    <>
      <div className="input-field-block-add">
        <label className="input-name-label-add">{input.name.toUpperCase()}</label>
        <input {...input} className="input-field-add" type={type} placeholder={placeholder}/>
      </div>
      {touched && error ? <label className="errors-label-add">{error}</label> : null}
    </>
  )
}

let CardAdding = (props) => {

    function dragSrartHandler(e) {
      e.preventDefault()
      e.target.classList.toggle("on-drag-start-add",true)
    }

    function dragLeaveHandler(e) {
      e.preventDefault()
      e.target.classList.toggle("on-drag-start-add",false)
    }

    function onDropHandler(e){
      e.preventDefault()
      e.target.classList.toggle("on-drag-start-add",false)
      let files = [...e.dataTransfer.files]
      if(files.length > 1){
        alert("Only on file is permitted to use for contact avatar")
        files = null
      }
      const reader = new FileReader()
      // let formData = new FormData()
      // formData.append('url',files[0])
      // props.setAvaSrc(URL.createObjectURL(files[0]))
      if(files){
        reader.readAsDataURL(files[0])
        reader.onloadend = function () {
          props.setAvaSrc(reader.result)
        }
      }
    }

    return(
      <form onSubmit={props.handleSubmit}>
        <div className="add-page">
          <div className="ava-holder">
            <img
              className="contact-add-ava"
              onDragStart={e => dragSrartHandler(e)}
              onDragOver={e => dragSrartHandler(e)}
              onDragLeave={e => dragLeaveHandler(e)}
              onDrop={e => onDropHandler(e)}
              src={props.ava_src}
              alt=""
            />
          </div>
          <Field name="fullname" component={renderAddField} type="text" />
          <Field name="number" component={renderAddField} type="text" placeholder="+38(000)000-00-00"/>
          <Field name="add_number" component={renderAddField} type="text" placeholder="+38(000)000-00-00"/>
          <Field name="company" component={renderAddField} type="text" />
          <Field name="email" component={renderAddField} type="email" />
          <Field name="type" list="types" component={renderAddField} />
          <datalist id="types">
            <option value="Work">Work</option>
            <option value="Friends">Friends</option>
            <option value="Family">Family</option>
            <option value="Other">Other</option>
          </datalist>
          <div className="sbmt-block">
            <button className="sbmt" type="submit">Save</button>
            <button className="sbmt" type="button" onClick={props.reset}>
              Clear
            </button>
          </div>
        </div>
      </form>
    )
}

const CardAddingReduxForm = reduxForm({
  form: 'card-adding',
  validate
})(CardAdding)
//props.handleSubmit приходит в CardEdit с контейнерной компоненты CardEditReduxForm которая создаеться через reduxForm({})(CardEdit)
// при сабмите handleSubmit выполняет следующие действия:
// 1)e.preventDefault(),которое отключает стандартное поведение формы в html(презагрузку страницы полсе сабмита)
// 2)собирает все данные в один обьект с компонент Field которые обрабатывают значение ввода в inputы name в Fields будет соответсвовать значению свойства в создаваемом обьекте
// 3)вызывает const submit = (cardEditFormDataObject) => {props.addContact(cardEditFormDataObject)} с родительской компоненты-контейнера CardEditContainer
// и передает в этот метод обьект з данными собранных с Field-ов,метод submit нужен для того чтобы передать засабмиченные данные во внешнюю среду для дальнейшей обработки
export default CardAddingReduxForm

// class CardEdit extends React.Component {
//
//     constructor(props){
//         super(props)
//         this.addContact = this.addContact.bind(this)
//         this.handeleChangeInFocus = this.handeleChangeInFocus.bind(this)
//         this.handeleChangeFullName = this.handeleChangeFullName.bind(this)
//         this.handeleChangeNumber = this.handeleChangeNumber.bind(this)
//         this.handeleChangeAddNumber = this.handeleChangeAddNumber.bind(this)
//         this.handeleChangeCompany = this.handeleChangeCompany.bind(this)
//         this.handeleChangeEmail =   this.handeleChangeEmail.bind(this)
//         this.handeleChangeType = this.handeleChangeType.bind(this)
//     }
//
//     handeleChangeInFocus=(event)=>{this.props.changeInFocus(!event.target.value)}
//     handeleChangeFullName=(event)=>{this.props.changeFullname(event.target.value)}
//     handeleChangeNumber=(event)=>{this.props.changeNumber(event.target.value)}
//     handeleChangeAddNumber=(event)=>{this.props.changeAddNumber(event.target.value)}
//     handeleChangeCompany=(event)=>{this.props.changeCompany(event.target.value)}
//     handeleChangeEmail=(event)=>{this.props.changeEmail(event.target.value)}
//     handeleChangeType=(event)=>{this.props.changeType(event.target.value)}
//
//     addContact(){
//       this.props.addContact(
//         this.props.fullname,
//         this.props.number,
//         this.props.add_number,
//         this.props.type,
//         this.props.company,
//         this.props.email
//       )
//     }
//     render(){
//     return (
//         <div>
//           <div className="ava-holder-editpage">
//               <img src={ava} alt=""/>
//           </div>
//           <div style={this.props.inFocus?{}:{marginTop: '20px'}}>
//               {
//               this.props.inFocus ?
//               <input onBlur={this.handeleChangeInFocus} onChange={this.handeleChangeFullName} name='fullname' value={this.props.fullname} className="edt-input" placeholder="Fullname" /> :
//               <span onClick={this.handeleChangeInFocus} style={{marginLeft: '5%', paddingTop: '20px'}}>{!this.props.fullname ? 'Please tap here and enter fullname' : this.props.fullname}</span>
//               }
//           </div>
//           <div>
//               <input onChange={this.handeleChangeNumber} name='number' value={this.props.number} className="edt-input" placeholder="Number" />
//           </div>
//           <div>
//               <input onChange={this.handeleChangeAddNumber} name='add_number' value={this.props.add_number} className="edt-input" placeholder="Addittional number" />
//           </div>
//           <div>
//               <input onChange={this.handeleChangeCompany} name='company' value={this.props.company} className="edt-input" placeholder="Company"/>
//           </div>
//           <div>
//               <input onChange={this.handeleChangeEmail} name='email' value={this.props.email} className="edt-input" placeholder="Email"/>
//           </div>
//           <select onChange={this.handeleChangeType} name='type' value={this.props.type} className="edt-input">
//               <option value="" hidden>Type</option>
//               <option value="Work">Work</option>
//               <option value="Friends">Friends</option>
//               <option value="Family">Family</option>
//               <option value="Other">Other</option>
//           </select>
//           <button onClick={this.addContact} className="sbmt-btn">Save</button>
//         </div>
//     )}
// }
// export default CardEdit;

// class CardEdit extends React.Component {
//     constructor(props){
//         super(props)
//         this.state={
//             inFocus: false,
//             fullname:'',
//             number:'',
//             add_number:'',
//             company:'',
//             email:'',
//             type:'Type',
//         }
//         this.handeleChanges = this.handeleChanges.bind(this);
//         this.onInputClick = this.onInputClick.bind(this);
//         this.onSubmit = this.onSubmit.bind(this)
//     }
//
//     handeleChanges = (event) => {
//         let name = event.target.name
//         let newValue = event.target.value
//         this.setState({
//             [name]: newValue})
//     }
//
//     onInputClick(){
//         let newValue = this.state.inFocus
//         this.setState({ inFocus: !newValue })
//         console.log(this.state)
//     }
//     onSubmit(){
//       API.addContact(
//         this.state.fullname,
//         this.state.number,
//         this.state.add_number,
//         this.state.type,
//         this.state.company,
//         this.state.email
//       )
//     }
//     render(){
//     return (
//         <div>
//           <div className="ava-holder-editpage">
//               <img src={ava} alt=""/>
//           </div>
//           <div style={this.state.inFocus?{}:{marginTop: '20px'}}>
//               {
//               this.state.inFocus ?
//               <input onBlur={this.onInputClick} onChange={this.handeleChanges} name='fullname' value={this.state.fullname} className="edt-input" placeholder="Fullname" /> :
//               <span onClick={this.onInputClick} style={{marginLeft: '5%', paddingTop: '20px'}}>{!this.state.fullname ? 'Please tap here and enter fullname' : this.state.fullname}</span>
//               }
//           </div>
//           <div>
//               <input onChange={this.handeleChanges} name='number' value={this.state.number} className="edt-input" placeholder="Number" />
//           </div>
//           <div>
//               <input onChange={this.handeleChanges} name='add_number' value={this.state.add_number} className="edt-input" placeholder="Addittional number" />
//           </div>
//           <div>
//               <input onChange={this.handeleChanges} name='company' value={this.state.company} className="edt-input" placeholder="Company"/>
//           </div>
//           <div>
//               <input onChange={this.handeleChanges} name='email' value={this.state.email} className="edt-input" placeholder="Email"/>
//           </div>
//           <select onChange={this.handeleChanges} name='type' value={this.state.type} className="edt-input">
//               <option value="" hidden>Type</option>
//               <option value="Work">Work</option>
//               <option value="Friends">Friends</option>
//               <option value="Family">Family</option>
//               <option value="Other">Other</option>
//           </select>
//           <button onClick={this.onSubmit} className="sbmt-btn">Save</button>
//         </div>
//     )}
// }
// Событие onblur возникает при потере элемента фокуса. Это обычно происходит, если щелкнуть на другой элемент текущего документа.
// Событие onblur противоположно по своему действию событию onfocus.
// export default CardEdit;
