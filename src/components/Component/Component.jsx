import React from 'react';
import logo from '../../logo.svg';
import './Component.css';

class Component extends React.Component {
    render() {
        return (
            <div className={"child"}>
                <img src={logo} className={"component-logo"} alt={"logo"} />
                <p>
                  {this.props.msg}
                </p>
            </div>
        )
    }
}

export default Component;