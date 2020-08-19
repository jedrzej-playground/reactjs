import React from 'react';
import logo from '../../logo.svg';
import './PureComponent.css';

class PureComponent extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={"child"}>
                <img src={logo} className={"pure-component-logo"} alt={"logo"} />
                <p>
                  {this.props.msg}
                </p>
            </div>
        )
    }

}

export default PureComponent;