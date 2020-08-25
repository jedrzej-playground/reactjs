import React from 'react';
import SearchAddHeader from '../SearchAddHeader/SearchAddHeader';
import OptionsMenu from '../OptionsMenu/OptionsMenu';
import ResultBody from '../ResultBody/ResultBody';
import Footer from '../Footer/Footer';
import './FrontPage.css';

const FrontPage = () => 
    <div className={"front-page"}>
        <SearchAddHeader></SearchAddHeader>
        <OptionsMenu></OptionsMenu>
        <ResultBody></ResultBody>
        <Footer></Footer>
    </div>

export default FrontPage;