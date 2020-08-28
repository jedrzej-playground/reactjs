import React, {useState} from 'react';
import './OptionsFilter.css';

const categories = ["All", "Documentary", "Comedy", "Horror", "Crime"]

const OptionsFilter = () => {

    const [selected, setSelected] = useState("All");

    return(
        <div className="options-filter">
            <ul className="filter-list">
                {categories.map(category => 
                    <li 
                        className={selected === category ? "filter-element-selected" : "filter-element"} 
                        key={`category-${category}`}
                        onClick={() => setSelected(category)}
                    >{category}</li>
                )}
            </ul>
        </div>
    )
}

export default OptionsFilter;