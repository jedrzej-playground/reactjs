import React, {useState} from 'react';
import logo from '../../assets/netflix_roulette_logo.png';
import ModalBuilder from '../Modal/ModalBuilder/ModalBuilder';

import './SearchAddHeader.css';

const SearchAddHeader = () => {
    const [showAddModal, setShowAddModal] = useState(false);

    return (
        <div className="search-add-header">
            <div className="logo-row">
                <img src={logo} className="logo" alt="logo" />
                <button onClick={() => setShowAddModal(true)} className="add-movie-button">+ add movie</button>
            </div>
            <div className="search-row">
                <span className="find-movie-text">Find your movie</span>
                <div>
                    <input 
                        className="search-input"
                        placeholder="What do you want to watch?"
                    />
                    <button className="search-button">search</button>
                </div>
            </div>
            {showAddModal ? <ModalBuilder onClose={() => setShowAddModal(false)} action="add" movie="empty" /> : null}
        </div>
    );
}

export default SearchAddHeader;