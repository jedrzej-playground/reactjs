import React from 'react';
import './ErrorBoundary.css';

const FallbackText = () => (
    <div className="error-msg">
        Yoinks! Something went wrong. Please refresh page in few minutes.
    </div>
)

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { error: null, errorInfo: null };
    }
    
    componentDidCatch(error, errorInfo) {
      this.setState({
        error: error,
        errorInfo: errorInfo
      })
    }
    
    render() {
        return(
            <>
                {this.state.error ? <FallbackText /> : this.props.children}
            </>
        )
    }
}

export default ErrorBoundary;
