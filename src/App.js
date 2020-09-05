import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import CardEditContainer from './components/Add/CardEditContainer';
import ContactsContainer from './components/Contacts/ContactsContainer';
import { Route, Switch, Redirect} from 'react-router-dom';
import LoginConteiner from './components/AuthFolder/LoginConteiner';
import RegisterForm from './components/AuthFolder/RegisterForm';


function App(props) {
  return (
    <>
      { props.isLoggedIn
        ? (<div className="app-wrapper">
            <Header />
            <div className="content-wrapper">
              <Switch>
                <Route path='/view' render={() => <ContactsContainer/>} />
                <Route path='/edit' render={() => <CardEditContainer/>} />
                <Redirect to='/view' />
              </Switch>
            </div>
          </div>)
        : (<div className='login-link'>
            <Switch>
              <Route path='/login' component={LoginConteiner} />
              <Route path='/register' component={RegisterForm} />
              <Redirect to="/login"/>
            </Switch>
          </div>)
        }
      </>


  //   <div className="app-wrapper">
  //     <Header />
  //     <div style={{margin: '5px auto', width: '150px'}}><NavLink className='login-link' to='/login'>Login in to app</NavLink></div>
  //     <div className="content-wrapper">
  //       <Switch>
  //         <Route path='/view' render={() => <ContactsContainer/>} />
  //         <Route path='/edit' render={() => <CardEditContainer />} />
  //         <Route path='/login' component={LoginForm} />
  //         <Route path='/register' component={RegisterForm} />
  //         <Redirect to='/view' />
  //       </Switch>
  //     </div>
  //   </div>
  );
}

export default App;
/*
  <Redirect to='/view' />-дефолтна компонента яка буде відображуватись завжи першою буде <ContactsContainer/>

render={() => <ContactsContainer {...props} />}-можемо передати пропси
component={LoginForm}-відмальвоється компонента пропси передати не можна
Спочатку появляється посилання <NavLink className='login-link' to='/login'>Login in to app</NavLink> на компонент   <Route path='/login' component={LoginForm} />
відкриває компоненту LoginForm і вже в неї є посилання <NavLink to='/register' >Do not have account? Sign Up!</NavLink> на компоненту
 <Route path='/register' component={RegisterForm} />
*/
