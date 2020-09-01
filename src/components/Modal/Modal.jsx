import React from 'react';
import './Modal.css';

const Modal = () => 
    <div className="modal">
        <div className="modal-title">Title</div>
        <div className="modal-content">
            <div className="modal-content-title">inputz</div>
            <input className="modal-content-input" />

            <div className="modal-content-title">inputz</div>
            <input className="modal-content-input" />

            <div className="modal-content-title">inputz</div>
            <input className="modal-content-input" />

            <div className="modal-content-title">inputz</div>
            <input className="modal-content-input" />

            <div className="modal-content-title">inputz</div>
            <input className="modal-content-input" />

            <div className="modal-content-title">inputz</div>
            <input className="modal-content-input" />

            <div className="modal-content-title">inputz</div>
            <input className="modal-content-input" />
        </div>
        <div className="modal-footer">
            <button className="reset-button">reset</button>
            <button className="submit-button">submit</button>
        </div>
    </div>

export default Modal;