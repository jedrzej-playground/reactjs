import React from 'react';
import {createPortal} from 'react-dom';
import './Modal.css';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({onClose, title, content, buttons}) => {

    return createPortal(
        <div className="modal-blur-wrapper">
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
        </div>,
    modalRoot
    );
}

export default Modal;