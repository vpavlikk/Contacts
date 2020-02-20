import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import View from './View/View';
import CardEdit from './Add/CardEdit';

function App(props) {

  return (
    <div className="app-wrapper">
      <Header />
      <div className="content-wrapper">
        <View />
        {/* <CardEdit /> */}
      </div>
    </div>
  );
}

export default App;
