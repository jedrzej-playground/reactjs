import React from 'react';
import OptionsFilter from '../OptionsFilter/OptionsFilter';
import OptionsSorter from '../OptionsSorter/OptionsSorter';
import './OptionsMenu.css';

const OptionsMenu = ({setFilter}) =>
    <div className="options-menu">
        <OptionsFilter setFilter={setFilter} />
        <OptionsSorter />
    </div>

export default OptionsMenu;