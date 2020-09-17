import React, {useState} from 'react';
import PropTypes from 'prop-types';
import noImage from './no_image.png'
import './MovieCard.css';
import ModalBuilder from '../Modal/ModalBuilder/ModalBuilder';


const MovieCard = (props) => {
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    return(
        <div className="movie-card">
            <div className="cover">
                <img 
                    src={props.movie.poster_path} 
                    alt={props.movie.title} 
                    onClick={props.onCoverClick}
                    onError={(e)=> {
                        e.target.onerror = null; 
                        e.target.src=noImage
                    }}
                />
                <div className="movie-menu-button">
                <div className="movie-dropdown-content">
                    <a href="#1" onClick={() => setShowEditModal(true)}>Edit</a>
                    <a href="#2" onClick={() => setShowDeleteModal(true)}>Delete</a>
                    </div>
                </div>
            </div>
            <div className="title-year">
                <span className="title">{props.movie.title}</span>
                <span className="year">{props.movie.release_date.split('-')[0]}</span>
            </div>
            <span className="genre">{props.movie.genres.join(', ')}</span>
            {showEditModal ? <ModalBuilder onClose={() => setShowEditModal(false)} action="edit" movie={props.movie} /> : null}
            {showDeleteModal ? <ModalBuilder onClose={() => setShowDeleteModal(false)} action="delete" movieId={props.movie.id} /> : null}
        </div>
    );
}


MovieCard.propTypes = {
    movie: PropTypes.shape({
        poster_path: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired, 
        release_date: PropTypes.string.isRequired, 
        genres: PropTypes.array.isRequired
    })
};

export default MovieCard;