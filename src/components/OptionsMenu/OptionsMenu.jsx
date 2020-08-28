import React from 'react';
import OptionsFilter from '../OptionsFilter/OptionsFilter';
import OptionsSorter from '../OptionsSorter/OptionsSorter';
import './OptionsMenu.css';

const OptionsMenu = () =>
    <div className="options-menu">
        <OptionsFilter />
        <OptionsSorter />
    </div>

export default OptionsMenu;