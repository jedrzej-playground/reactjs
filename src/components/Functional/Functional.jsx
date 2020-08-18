import React from 'react';
import logo from '../../logo.svg';
import './Functional.css';

const Functional = (props) => 
    <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        {props.msg}
      </p>
    </header>
  </div>


export default Functional;