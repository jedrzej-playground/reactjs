import React from 'react';
import './OptionsSorter.css';

const sortBy = ["Release Date", "Title", "Averege votes", "Runtime"]

const OptionsSorter = () =>
    <div className="options-sorter">
        Sort by&nbsp;
        <select>
            {sortBy.map(sortMethod => <option value={sortMethod}>{sortMethod}</option>)}
        </select>
    </div>

export default OptionsSorter;