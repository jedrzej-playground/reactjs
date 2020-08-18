import React from 'react';
import ReactDOM from 'react-dom';

let createElement = React.createElement(
    "h1",
    { style: { color: "red" } },
    `Hello World from createElement`
  );
  
  ReactDOM.render(createElement, document.querySelector("#root"));

  export default createElement;