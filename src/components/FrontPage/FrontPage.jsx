import React from 'react';
import SearchAddHeader from '../SearchAddHeader/SearchAddHeader';
import ResultBody from '../ResultBody/ResultBody';
import Footer from '../Footer/Footer';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import './FrontPage.css';

const FrontPage = () => 
    <div className="front-page">
        <SearchAddHeader />
        <ErrorBoundary>
            <ResultBody />
        </ErrorBoundary>
        <Footer />
    </div>

export default FrontPage;