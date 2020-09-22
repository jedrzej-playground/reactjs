import React, {useState} from 'react';
import SearchAddHeader from '../SearchAddHeader/SearchAddHeader';
import ResultBody from '../ResultBody/ResultBody';
import Footer from '../Footer/Footer';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import DetailsHeader from '../DetailsHeader/DetailsHeader';
import './FrontPage.css';

const FrontPage = () => {

    const [showDetails, setShowDetails] = useState(false); 
    const [movie, setMovie] = useState([]); 

    const passMovieToDetails = (movie) => {
        setMovie(movie);
        setShowDetails(true);
    }

    return(
        <div className="front-page">
            {showDetails ?
            <DetailsHeader 
                movie={movie}
                onMagnifyClick={() => setShowDetails(false)}
            /> :
            <SearchAddHeader /> 
            }
            <ErrorBoundary>
                <ResultBody
                    onCoverClick={passMovieToDetails}
                />
            </ErrorBoundary>
            <Footer />
        </div>
    );
}

export default FrontPage;