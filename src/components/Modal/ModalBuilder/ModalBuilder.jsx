import React from 'react';
import Modal from '../Modal';

const modalRoot = document.getElementById('modal-root');

const ModalBuilder = ({onClose, action, movie, movieId}) => {

    let title, content, buttons;

    if (action === "add" || action === "edit") {
        title = action === "add" ? "Add Movie" : "Edit Movie";

        content = 
            <>
            <div className="modal-content-title">Title</div>
            <input className="modal-content-input" placeholder={movie.title ? movie.title : ""} />
            
            <div className="modal-content-title">Release date</div>
            <input className="modal-content-input" placeholder={movie.release_date ? movie.release_date : ""} />
            
            <div className="modal-content-title">Movie URL</div>
            <input className="modal-content-input" placeholder={movie.poster_path ? movie.poster_path : ""} />
            
            <div className="modal-content-title">Genre</div>
            <input className="modal-content-input" placeholder={movie.genres ? movie.genres : ""} />
            
            <div className="modal-content-title">Overview</div>
            <input className="modal-content-input" placeholder={movie.overview ? movie.overview : ""} />
            
            <div className="modal-content-title">Runtime (minutes)</div>
            <input className="modal-content-input" placeholder={movie.runtime ? movie.runtime : ""} />
            </>

        buttons = 
            <>
            <button className="reset-button">Reset</button>
            <button className="submit-button">Submit</button>
            </>
    }
    else {
        title = "Delete Movie";
        content = "Are you sure you want to delete this movie?";
        buttons = 
            <>
            <button className="submit-button">Confirm</button>
            </>
            
        let deleteId = movieId;
    } 

    return(
        <Modal 
            onClose={onClose}
            title={title}
            content={content}
            buttons={buttons}
        />
    );
}

export default ModalBuilder;