import React,{useEffect} from 'react';
import './App.css';
import Header from './components/Header/Header';
import CardAddingContainer from './components/Add/CardAddingContainer';
import ContactsContainer from './components/Contacts/ContactsContainer';
import { Route, Switch, Redirect} from 'react-router-dom';
import LoginConteiner from './components/AuthFolder/LoginConteiner';
import RegisterForm from './components/AuthFolder/RegisterForm';
import ContactChangeConteiner from './components/ContactChange/ContactChangeConteiner';
import ContactInfo from './components/ContactInfo/ContactInfo';

const App=(props)=>{
  useEffect(()=>{
    props.IsloggedInPageMount()
    return () => {
      props.LogOut()
    };
  },[])

  const logOut =()=>{
    props.LogOut()
  }
  return (
    <>
      { props.isLoggedIn
        ? (<div className="app-wrapper">
            <Header />
              <div className="app-item">
                <p className="app-email">{props.email}</p>
                <button className="btn-logout" onClick={logOut}>Log Out</button>
              </div>
            <div className="content-wrapper">
              <Switch>
                <Route path='/contacts' render={() => <ContactsContainer/>} />
                <Route path='/edit' render={() => <CardAddingContainer/>} />
                <Route path='/contact-change' render={()=><ContactChangeConteiner/>}/>
                <Route path='/contact-info' render={()=><ContactInfo/>}/>
                <Redirect to='/contacts'/>
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
