import React from 'react';
import './OptionsSorter.css';

const sortBy = [
    {name: "Release Date (newest first)", value: "release_date_desc"},
    {name: "Release Date", value: "release_date"},
    {name: "Title", value: "title"},
    {name: "Averege votes", value: "vote_average"},
    {name: "Runtime", value: "runtime"}
]

const OptionsSorter = ({setSort}) => {

    const updateSort = (selected) => {
        setSort(selected);
    }

    return(
        <div className="options-sorter">
            Sort by&nbsp;
            <select onChange={(event) => updateSort(event.target.value)}>
                {sortBy.map(sortMethod => <option value={sortMethod.value} key={`sort-${sortMethod.value}`}>
                    {sortMethod.name}
                </option>)}
            </select>
        </div>
    );
}

export default OptionsSorter;