import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import CardEdit from './components/Add/CardEdit';
import ContactsContainer from './components/Contacts/ContactsContainer';
import { Route, Switch, Redirect, NavLink } from 'react-router-dom';
import LoginForm from './components/AuthFolder/LoginForm';
import RegisterForm from './components/AuthFolder/RegisterForms';

function App() {

  return (
    <div className="app-wrapper">
      <Header />
      <div style={{margin: '5px auto', width: '150px'}}><NavLink className='login-link' to='/login'>Login in to app</NavLink></div>
      <div className="content-wrapper">
        <Switch>
          <Route path='/view' render={() => <ContactsContainer/>} />
          <Route path='/edit' render={() => <CardEdit />} />
          <Route path='/login' component={LoginForm} />
          <Route path='/register' component={RegisterForm} />
          <Redirect to='/view' />//дефолтна компонента яка буде відображуватись завжи першою буде <ContactsContainer/>
        </Switch>
      </div>
    </div>
  );
}

export default App;
/*
render={() => <ContactsContainer {...props} />}-можемо передати пропси
component={LoginForm}-відмальвоється компонента пропси передати не можна
Спочатку появляється посилання <NavLink className='login-link' to='/login'>Login in to app</NavLink> на компонент   <Route path='/login' component={LoginForm} />
відкриває компоненту LoginForm і вже в неї є посилання <NavLink to='/register' >Do not have account? Sign Up!</NavLink> на компоненту
 <Route path='/register' component={RegisterForm} />
*/
