import React from 'react';

let createElement = React.createElement(
    "span",
    { className: "child", style: { color: "red" } },
    "Hello World from createElement"
  );
  
export default createElement;