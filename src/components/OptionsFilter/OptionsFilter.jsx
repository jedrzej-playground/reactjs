import React from 'react';
import './OptionsFilter.css';

const OptionsFilter = () =>
    <div className={"options-filter"}>
        <ul className={"filter-list"}>
            <li className={"filter-element"}>All</li>
            <li className={"filter-element"}>Documentary</li>
            <li className={"filter-element"}>Comedy</li>
            <li className={"filter-element"}>Horror</li>
            <li className={"filter-element"}>Crime</li>
        </ul>
    </div>

export default OptionsFilter;