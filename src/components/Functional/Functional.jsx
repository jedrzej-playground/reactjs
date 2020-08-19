import React from 'react';
import logo from '../../logo.svg';
import './Functional.css';

const Functional = (props) => 
    <div className={"child"}>
      <img src={logo} className={"functional-logo"} alt={"logo"} />
      <p>
        {props.msg}
      </p>
  </div>

export default Functional;