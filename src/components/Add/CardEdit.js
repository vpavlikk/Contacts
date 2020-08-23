import React from 'react'
import "./CardEdit.sass"
import ava from "./ava.png"
import {API} from "../../api"


class CardEdit extends React.Component {
    constructor(props){
        super(props)
        this.state={
            inFocus: false,
            fullname:'',
            number:'',
            add_number:'',
            company:'',
            email:'',
            type:'Type',
        }
        this.handeleChanges = this.handeleChanges.bind(this);
        this.onInputClick = this.onInputClick.bind(this)
    }

    handeleChanges = (event) => {
        let name = event.target.name
        let newValue = event.target.value
        this.setState({
            [name]: newValue})
    }

    onInputClick(){
        let newValue = this.state.inFocus
        this.setState({ inFocus: !newValue })
        console.log(this.state)
    }
    onSubmit(){
      API.addContact(
        this.state.fullname,
        this.state.number,
        this.state.add_number,
        this.state.type,
        this.state.company,
        this.state.email
      )
    }
    render(){
    return (
        <div>
          <div className="ava-holder-editpage">
              <img src={ava} alt=""/>
          </div>
          <div style={this.state.inFocus?{}:{marginTop: '20px'}}>
              {
              this.state.inFocus ?
              <input onBlur={this.onInputClick} onChange={this.handeleChanges} name='fullname' value={this.state.fullname} className="edt-input" placeholder="Fullname" /> :
              <span onClick={this.onInputClick} style={{marginLeft: '5%', paddingTop: '20px'}}>{!this.state.fullname ? 'Please tap here and enter fullname' : this.state.fullname}</span>
              }
          </div>
          <div>
              <input onChange={this.handeleChanges} name='number' value={this.state.number} className="edt-input" placeholder="Number" />
          </div>
          <div>
              <input onChange={this.handeleChanges} name='add_number' value={this.state.add_number} className="edt-input" placeholder="Addittional number" />
          </div>
          <div>
              <input onChange={this.handeleChanges} name='company' value={this.state.company} className="edt-input" placeholder="Company"/>
          </div>
          <div>
              <input onChange={this.handeleChanges} name='email' value={this.state.email} className="edt-input" placeholder="Email"/>
          </div>
          <select onChange={this.handeleChanges} name='type' value={this.state.type} className="edt-input">
              <option value="" hidden>Type</option>
              <option value="Work">Work</option>
              <option value="Friends">Friends</option>
              <option value="Family">Family</option>
              <option value="Other">Other</option>
          </select>
          <button onClick={this.onSubmit} className="sbmt-btn">Save</button>
        </div>
    )}
}

export default CardEdit;
