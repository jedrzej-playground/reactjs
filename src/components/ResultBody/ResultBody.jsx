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

   const [filter, setFilter] = useState("All");
   
   const changeFilter = (filter) => {
       setFilter(filter)
   }

    let filteredMovies = filter == "All" ? movies : movies.filter(movie => movie.genres.includes(filter));
    
    return (
        <div className="result-body">
        <OptionsMenu setFilter={changeFilter} />
        <div className="result-found-text">{filteredMovies.length} movies found</div>
        <div className="movie-card-area">
            {filteredMovies.map(movie => <MovieCard movie={movie} key={movie.id} />)}
        </div>
    </div>
    )
}

export default ResultBody;