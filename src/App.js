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
          <Redirect to='/view' />
        </Switch>
      </div>
    </div>
  );
}

export default App;
