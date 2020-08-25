import React from 'react';
import logo from '../../assets/netflix_roulette_logo.png';
import './SearchAddHeader.css';

const SearchAddHeader = () =>
    <div className={"search-add-header"}>
        <div className="logo-row">
            <img src={logo} className={"logo"} alt={"logo"} />
            <button className={"add-movie-button"}>+ add movie</button>
        </div>
        <div className={"search-row"}>
            <span className={"find-movie-text"}>Find your movie</span>
            <div>
                <input 
                    className={"search-input"}
                    placeholder={"What do you want to watch?"}
                />
                <button className={"search-button"}>search</button>
            </div>
        </div>

    </div>

export default SearchAddHeader;