import React from 'react'
import './Header.sass'
import { NavLink,useLocation } from 'react-router-dom';

const Header = ()=>{
  let location = useLocation()
  return(
    <header  className="header">
        <div className={`menu-item ${location.pathname === "/view" ? "selected":null}`}  ><NavLink to='/view'>CONTACTS</NavLink></div>
        <div className={`menu-item  ${location.pathname === "/edit" ? "selected":null}`}  ><NavLink to='/edit'>ADD NEW</NavLink></div>
    </header>
  )
}

/*
another way
class Header extends React.Component {

  constructor(props){
    super(props)
    this.state={
      selected1: `${window.location.pathname === "/view" ? 'selected' : null }`,//проверяет если открыло 1 страницу то присвоить Контактс класс селектед
      selected2: `${window.location.pathname === "/edit" ? 'selected' : null }`,//если вторую то присвоить селектед елементу Едд нью
    }
  }

  check1=()=>{
    this.setState({selected2:null});
    var css = window.location.pathname === "/view" ? 'selected': null ;
    this.setState({selected1:css});
    console.log(this.state.selected1 +" selected1")
  }
  check2=()=>{
    this.setState({selected1:null});
    var css = window.location.pathname === "/edit" ? 'selected': null ;
    this.setState({selected2:css});
    console.log(this.state.selected2+" selected2")
  }

  render(){
    return(
      <header  className="header">
          <div className={`menu-item ${this.state.selected1}`} onClick={this.check1} ><NavLink to='/view'>CONTACTS</NavLink></div>
          <div className={`menu-item ${this.state.selected2}`} onClick={this.check2} ><NavLink to='/edit'>ADD NEW</NavLink></div>
      </header>
    )
  }
}
// обе функциии чер запускаються только при нажатии на див ,сначала они всегда удаляют стиль селектед предедущего елемента ,что бы селектед не оставался на том
//же елементе а удалялся при переключении на другой единственный
*/

export default Header;
