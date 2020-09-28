import React, {useState} from 'react';
import './OptionsFilter.css';

const categories = ["All", "Documentary", "Comedy", "Horror", "Crime"]

const OptionsFilter = ({setFilter}) => {

    const [selected, setSelected] = useState("All");

    const updateFilter = (category) => {
        setSelected(category);
        setFilter(category);
    }

    return(
        <div className="options-filter">
            <ul className="filter-list">
                {categories.map(category => 
                    <li 
                        className={selected === category ? "filter-element-selected" : "filter-element"} 
                        key={`category-${category}`}
                        onClick={() => updateFilter(category)}
                    >{category}</li>
                )}
            </ul>
        </div>
    )
}

export default OptionsFilter;