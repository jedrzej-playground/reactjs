import React from 'react';
import './Modal.css';

const Modal = ({onClose, title, content, buttons}) => 
    <div className="modal">
        <button className="modal-close-button" onClick={onClose}>X</button>
        <div className="modal-title">
            {title}
        </div>

        <div className="modal-content">
            {content}
        </div>

        <div className="modal-footer">
            {buttons}
        </div>
    </div>

export default Modal;