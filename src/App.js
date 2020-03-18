import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import CardEdit from './components/Add/CardEdit';
import ContactsContainer from './components/Contacts/ContactsContainer';
import { Route } from 'react-router-dom';

function App() {

  return (
    <div className="app-wrapper">
      <Header />
      <div className="content-wrapper">
        <Route  path='/view'  render={()=><ContactsContainer />} />
        <Route  path='/edit' render={()=> <CardEdit />}/>
      </div>
    </div>
  );
}

export default App;
