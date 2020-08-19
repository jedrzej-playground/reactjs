import React from 'react';
import './App.css';
import Component from './components/Component/Component';
import PureComponent from './components/PureComponent/PureComponent';
import Functional from './components/Functional/Functional';
import createElement from './components/CreateElement/createElement.js';

function App() {
  return (
    <div className={"app"}>
      <div className={"child"}>Hello World! (render blank msg subtask)</div>
      {createElement}
      <Component msg={"Hello World Component!"}  />
      <PureComponent msg={"Hello World PureComponent!"} />
      <Functional msg={"Hello World Functional!"} />
    </div>
  )
}

export default App;
