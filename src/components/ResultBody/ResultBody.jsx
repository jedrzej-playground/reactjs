import React, {useState, useEffect} from 'react';
import OptionsMenu from '../OptionsMenu/OptionsMenu';
import MovieCard from '../MovieCard/MovieCard';
import movieMock from './movieMock';
import './ResultBody.css';

const ResultBody = () => {
    const [movies, setMovies] = useState(
        movieMock
    );

    //killswitch to test error msg - yeah, I know, user can search movie which gives 0 results, but I don't have idea what other error I can simulate now :)
    /*
    useEffect(() => {
        setMovies(0); 
    }, [])
    */
    
    return (
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