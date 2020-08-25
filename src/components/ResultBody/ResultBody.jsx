import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './ResultBody.css';

const ResultBody = () =>
    <div className={"result-body"}>
        <div className={"result-found-text"}>XX movies found</div>
        <div className={"movie-card-area"}>
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
        </div>
    </div>

export default ResultBody;