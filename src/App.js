import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import CardEdit from './components/Add/CardEdit';
import ContactsContainer from './components/Contacts/ContactsContainer';

function App() {

  return (
    <div className="app-wrapper">
      <Header />
      <div className="content-wrapper">
        <ContactsContainer />
        {/* <CardEdit /> */}
      </div>
    </div>
  );
}

export default App;
