import React from 'react';
import logo from '../../logo.svg';
import './PureComponent.css';

class PureComponent extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                  {this.props.msg}
                </p>
              </header>
            </div>
          )
    }

}

export default PureComponent;