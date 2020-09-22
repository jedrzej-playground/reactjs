import React from 'react';
import logo from '../../assets/netflix_roulette_logo.png';
import './DetailsHeader.css';

const DetailsHeader = (props) => {

    return(
        <div className="details-header">
            <div className="details-logo-row">
                <img src={logo} className="details-logo" alt="logo" />
                <span onClick={props.onMagnifyClick} className="details-search-button">&#x1F50D;</span>
            </div>
            <div className="details-wrapper">
                <div className="details-cover">
                    <img src={props.movie.poster_path} className="details-logo" alt="logo" />
                </div>
                <div className="details-text">
                    <div className="details-text-title">
                        {props.movie.title}
                        <span className="details-text-title-score">{props.movie.vote_average}</span> 
                    </div>
                    <div className="details-text-tagline">{props.movie.tagline}</div>
                    <div className="details-text-year-length">{props.movie.release_date.split('-')[0]}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.movie.runtime} min</div>
                    <div className="details-text-overview">{props.movie.overview}</div>
                </div>
            </div>
        </div>
    );
}

export default DetailsHeader;