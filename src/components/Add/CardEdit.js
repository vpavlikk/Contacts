import React from 'react'
import "./CardEdit.sass"
import ava from "./ava.png"


class CardEdit extends React.Component {
    constructor(props){
        super(props)
        this.state={
            inFocus: false,
            fullname:'',
            number:'',
            ad_number:'',
            company:'',
            email:'',
            type:'Type',      
        }
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

    render(){
    return (
        <div>
            <form>
                <div className="ava-holder-editpage">
                    <img src={ava} alt=""/>
                </div>
                <div style={this.state.inFocus?{}:{marginTop: '20px'}}>
                    {
                    this.state.inFocus ? 
                    <input onBlur={this.onInputClick.bind(this)} onChange={this.handeleChanges} name='fullname' value={this.state.fullname} className="edt-input" placeholder="Fullname" /> :
                    <span onClick={this.onInputClick.bind(this)} style={{marginLeft: '5%', paddingTop: '20px'}}>{!this.state.fullname ? 'Please tap here and enter f ullname' : this.state.fullname}</span> 
                    }
                </div>
                <div>
                    <input onChange={this.handeleChanges} name='number' value={this.state.number} className="edt-input" placeholder="Number" />
                </div>
                <div>
                    <input onChange={this.handeleChanges} name='ad_number' value={this.state.ad_number} className="edt-input" placeholder="Adittional number" />
                </div>
                <div>
                    <input onChange={this.handeleChanges} name='company' value={this.state.company} className="edt-input" placeholder="Company"/>
                </div>
                <div>
                    <input onChange={this.handeleChanges} name='email' value={this.state.email} className="edt-input" placeholder="Email"/>
                </div>
                <select onChange={this.handeleChanges} name='type' value={this.state.type} className="edt-input" defaultValue="Type">
                    <option value="" hidden>Type</option>
                    <option value="Work">Work</option>
                    <option value="Friends">Friends</option>
                    <option value="Family">Family</option>
                    <option value="Other">Other</option>
                </select>
                <button className="sbmt-btn">Save</button>
            </form>
        </div>
    )}
}

export default CardEdit;

