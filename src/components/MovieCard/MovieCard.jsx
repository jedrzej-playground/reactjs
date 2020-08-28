import React from 'react';
import PropTypes from 'prop-types';
import noImage from './no_image.png'
import './MovieCard.css';

const MovieCard = (props) =>
    <div className="movie-card">
        <div className="cover">
            <img 
                src={props.movie.poster_path} 
                alt={props.movie.title} 
                onError={(e)=> {
                    e.target.onerror = null; 
                    e.target.src=noImage
                }}
            />
            <div className="movie-menu-button"></div>
        </div>
        <div className="title-year">
            <span className="title">{props.movie.title}</span>
            <span className="year">{props.movie.release_date.split('-')[0]}</span>
        </div>
        <span className="genre">{props.movie.genres.join(', ')}</span>
    </div>

MovieCard.propTypes = {
    movie: PropTypes.shape({
        poster_path: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired, 
        release_date: PropTypes.string.isRequired, 
        genres: PropTypes.array.isRequired
    })
};

export default MovieCard;