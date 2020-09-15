import React, {useState} from 'react';
import SearchAddHeader from '../SearchAddHeader/SearchAddHeader';
import ResultBody from '../ResultBody/ResultBody';
import Footer from '../Footer/Footer';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import DetailsHeader from '../DetailsHeader/DetailsHeader';
import './FrontPage.css';

const FrontPage = () => {

    const [showDetails, setShowDetails] = useState(true); //hardswitch

    return(
        <div className="front-page">
            {showDetails ?
            <DetailsHeader /> :
            <SearchAddHeader /> 
            }
            <ErrorBoundary>
                <ResultBody />
            </ErrorBoundary>
            <Footer />
        </div>
    );
}

export default FrontPage;