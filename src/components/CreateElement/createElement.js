import React from 'react';
import ReactDOM from 'react-dom';

let createElement = React.createElement(
    "span",
    { className: "child", style: { color: "red" } },
    "Hello World from createElement"
  );
  
  ReactDOM.render(createElement, document.querySelector("#root"));

  export default createElement;