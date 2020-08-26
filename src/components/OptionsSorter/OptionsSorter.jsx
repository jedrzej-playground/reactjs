import React from 'react';
import './OptionsSorter.css';

const OptionsSorter = () =>
    <div className="options-sorter">
        Sort by&nbsp;
        <select>
            <option>Release Date</option>
            <option>Alphabetical</option>
        </select>
    </div>

export default OptionsSorter;