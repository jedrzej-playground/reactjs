import React, {useState, useEffect} from 'react';
import OptionsMenu from '../OptionsMenu/OptionsMenu';
import MovieCard from '../MovieCard/MovieCard';
import movieMock from './movieMock';
import './ResultBody.css';

const ResultBody = ({onCoverClick}) => {
    const [movies, setMovies] = useState(movieMock);

    //killswitch to test error msg - yeah, I know, user can search movie which gives 0 results, but I don't have idea what other error I can simulate now :)
    /*
    useEffect(() => {
        setMovies(0); 
    }, [])
    */

    const [filter, setFilter] = useState("All");

    const [sort, setSort] = useState("release_date_desc");

    const changeFilter = (filter) => {
        setFilter(filter)
    }

    const changeSort = (sort) => {
        setSort(sort)
    }

    const sortByKey = (mov1, mov2, key) => {
        if (key.includes("_desc")) {
            key = key.slice(0, -5);
            return mov1[key] < mov2[key] ? 1 : -1; 
        }
        else return mov1[key] < mov2[key] ? -1 : 1; 
    }

    let filteredMovies = filter === "All" ? movies : movies.filter(movie => movie.genres.includes(filter));
    let sortedMovies = filteredMovies.sort((mov1, mov2) => sortByKey(mov1, mov2, sort));
    
    return (
        <div className="result-body">
        <OptionsMenu setFilter={changeFilter} setSort={changeSort} />
        <div className="result-found-text">{sortedMovies.length} movies found</div>
        <div className="movie-card-area">
            {sortedMovies.map(movie => <MovieCard movie={movie} key={movie.id} onCoverClick={() => onCoverClick(movie)} />)}
        </div>
    </div>
    )
}

export default ResultBody;