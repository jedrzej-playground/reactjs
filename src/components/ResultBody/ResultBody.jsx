import React, {useState} from 'react';
import OptionsMenu from '../OptionsMenu/OptionsMenu';
import MovieCard from '../MovieCard/MovieCard';
import movieMock from './movieMock';
import './ResultBody.css';

const ResultBody = () => {
    const [movies, setMovies] = useState(
        movieMock
    );

    //setMovies(0); //killswitch - yeah, I know, user can search movie which gives 0 results, but I don't have idea what other error I can simulate now :)

    if(movies.length === 0) {
        throw new Error('I crashed!');
    }

    return(
        <div className="result-body">
            <OptionsMenu />
            <div className="result-found-text">{movies.length} movies found</div>
            <div className="movie-card-area">
                {movies.map(movie => <MovieCard movie={movie} key={movie.id} />)}
            </div>
        </div>
    )
}

export default ResultBody;