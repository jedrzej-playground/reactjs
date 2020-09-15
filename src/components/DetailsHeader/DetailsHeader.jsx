import React from 'react';
import logo from '../../assets/netflix_roulette_logo.png';
import './DetailsHeader.css';

const DetailsHeader = () => {

    return(
        <div className="details-header">
            <div className="details-logo-row">
                <img src={logo} className="details-logo" alt="logo" />
                <span onClick={() => ("")} className="details-search-button">&#x1F50D;</span>
            </div>
            <div className="details-wrapper">
                <div className="details-cover">
                    <img src="https://image.tmdb.org/t/p/w500/pU1ULUq8D3iRxl1fdX2lZIzdHuI.jpg" className="details-logo" alt="logo" />
                </div>
                <div className="details-text">
                    <div className="details-text-title">
                        Pulp Fiction
                        <span className="details-text-title-score">5.0</span> 
                    </div>
                    <div className="details-text-tagline">Oscar winning movie</div>
                    <div className="details-text-year-length">1994&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;154 min</div>
                    <div className="details-text-overview">The city needs heroes. Darkness has settled over New York City as Shredder and his evil Foot Clan have an iron grip on everything from the police to the politicians. The future is grim until four unlikely outcast brothers rise from the sewers and discover their destiny as Teenage Mutant Ninja Turtles. The Turtles must work with fearless reporter April and her wise-cracking cameraman Vern Fenwick to save the city and unravel Shredder's diabolical plan.</div>
                </div>
            </div>
        </div>
    );
}

export default DetailsHeader;