import React from 'react';
import OptionsFilter from '../OptionsFilter/OptionsFilter';
import OptionsSorter from '../OptionsSorter/OptionsSorter';
import './OptionsMenu.css';

const OptionsMenu = ({setFilter, setSort}) =>
    <div className="options-menu">
        <OptionsFilter setFilter={setFilter} />
        <OptionsSorter setSort={setSort} />
    </div>

export default OptionsMenu;