import React from 'react'
import "./CardEdit.sass"
import ava from "./ava.png"

class CardEdit extends React.Component {

    constructor(props){
        super(props)
        this.addContact = this.addContact.bind(this)
        this.handeleChangeInFocus = this.handeleChangeInFocus.bind(this)
        this.handeleChangeFullName = this.handeleChangeFullName.bind(this)
        this.handeleChangeNumber = this.handeleChangeNumber.bind(this)
        this.handeleChangeAddNumber = this.handeleChangeAddNumber.bind(this)
        this.handeleChangeCompany = this.handeleChangeCompany.bind(this)
        this.handeleChangeEmail =   this.handeleChangeEmail.bind(this)
        this.handeleChangeType = this.handeleChangeType.bind(this)

    }

    handeleChangeInFocus=(event)=>{this.props.changeInFocus(!event.target.value)}
    handeleChangeFullName=(event)=>{this.props.changeFullname(event.target.value)}
    handeleChangeNumber=(event)=>{this.props.changeNumber(event.target.value)}
    handeleChangeAddNumber=(event)=>{this.props.changeAddNumber(event.target.value)}
    handeleChangeCompany=(event)=>{this.props.changeCompany(event.target.value)}
    handeleChangeEmail=(event)=>{this.props.changeEmail(event.target.value)}
    handeleChangeType=(event)=>{this.props.changeType(event.target.value)}

    addContact(){
      this.props.addContact(
        this.props.fullname,
        this.props.number,
        this.props.add_number,
        this.props.type,
        this.props.company,
        this.props.email
      )
    }
    render(){
    return (
        <div>
          <div className="ava-holder-editpage">
              <img src={ava} alt=""/>
          </div>
          <div style={this.props.inFocus?{}:{marginTop: '20px'}}>
              {
              this.props.inFocus ?
              <input onBlur={this.handeleChangeInFocus} onChange={this.handeleChangeFullName} name='fullname' value={this.props.fullname} className="edt-input" placeholder="Fullname" /> :
              <span onClick={this.handeleChangeInFocus} style={{marginLeft: '5%', paddingTop: '20px'}}>{!this.props.fullname ? 'Please tap here and enter fullname' : this.props.fullname}</span>
              }
          </div>
          <div>
              <input onChange={this.handeleChangeNumber} name='number' value={this.props.number} className="edt-input" placeholder="Number" />
          </div>
          <div>
              <input onChange={this.handeleChangeAddNumber} name='add_number' value={this.props.add_number} className="edt-input" placeholder="Addittional number" />
          </div>
          <div>
              <input onChange={this.handeleChangeCompany} name='company' value={this.props.company} className="edt-input" placeholder="Company"/>
          </div>
          <div>
              <input onChange={this.handeleChangeEmail} name='email' value={this.props.email} className="edt-input" placeholder="Email"/>
          </div>
          <select onChange={this.handeleChangeType} name='type' value={this.props.type} className="edt-input">
              <option value="" hidden>Type</option>
              <option value="Work">Work</option>
              <option value="Friends">Friends</option>
              <option value="Family">Family</option>
              <option value="Other">Other</option>
          </select>
          <button onClick={this.addContact} className="sbmt-btn">Save</button>
        </div>
    )}
}

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

export default CardEdit;
