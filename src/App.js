import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Contacts from './components/Contacts/Contacts';
import CardEdit from './components/Add/CardEdit';

function App(props) {

  return (
    <div className="app-wrapper">
      <Header />
      <div className="content-wrapper">
        <Contacts />
        {/* <CardEdit /> */}
      </div>
    </div>
  );
}

export default App;
