import React from 'react';
import PropTypes from 'prop-types';
import noImage from './no_image.png'
import './MovieCard.css';

const MovieCard = (props) =>
    <div className="movie-card">
        <img 
            src={props.movie.poster_path} 
            alt={props.movie.title} 
            onError={(e)=> {
                e.target.onerror = null; 
                e.target.src=noImage
            }}
        />
        <div className="title-year">
            <span className="title">{props.movie.title}</span>
            <span className="year">{props.movie.release_date.split('-')[0]}</span>
        </div>
        <span className="genre">{props.movie.genres.join(', ')}</span>
    </div>

export default MovieCard;

MovieCard.propTypes = {
    movie: PropTypes.shape({
        poster_path: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired, 
        release_date: PropTypes.string.isRequired, 
        genres: PropTypes.array.isRequired
    })
};
