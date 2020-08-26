import React from 'react';
import './OptionsFilter.css';

const categories = ["All", "Documentary", "Comedy", "Horror", "Crime"]

const OptionsFilter = () => {

    return(
        <div className="options-filter">
            <ul className="filter-list">
                {categories.map(category => 
                    <li 
                    className="filter-element" 
                    key={`category-${category}`}
                    >{category}</li>
                )}
            </ul>
        </div>
    )
}

export default OptionsFilter;