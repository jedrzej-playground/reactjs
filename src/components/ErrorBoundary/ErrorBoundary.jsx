import React from  'react';
import './ErrorBoundary.css';

const ErrorBoundary = (props) => {

    let gotError = props.error;

    const FallbackText = () => (
        <div className="error-msg">
            Yoinks! Something went wrong. Please refresh page in few minutes.
        </div>
    )

    return (
        <>
            {gotError ? <FallbackText /> : props.children}
        </>
    )
}

export default ErrorBoundary;