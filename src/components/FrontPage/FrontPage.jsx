import React from 'react';
import SearchAddHeader from '../SearchAddHeader/SearchAddHeader';
import ResultBody from '../ResultBody/ResultBody';
import Footer from '../Footer/Footer';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Modal from '../Modal/Modal';
import './FrontPage.css';

const FrontPage = () => 

    <div className="front-page">
        {/* {this.props.showAddMovieModal && */}
        {true &&
          <div className="modal-overlay">
              <Modal />
          </div>
        }
        <SearchAddHeader />
        <ErrorBoundary>
            <ResultBody />
        </ErrorBoundary>
        <Footer />
    </div>

export default FrontPage;