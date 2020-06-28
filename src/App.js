import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Jumbocarousel from './Components/Jumbo/Jumbocarousel.js';
import QualityRow from './Components/QualityRow/qrow.js';
import Footer from './Components/Footer/footer.js';

function App() {
  return (
    <div className='App'>
      <div className='navbar'>
        <div className='navbarTitle'>
          <h3> TomyVet </h3>
        </div>
        <div className='navbarLinks'>
          <a href='#' className='link'> Home </a>
          <p> | </p>
          <a href='#' className='link'> Products </a>
          <p> | </p>
          <a href='#' className='link'> Contact </a>
        </div>
        <div className='navbarSearch'>
          <textarea className='searchForm' maxLength='25'>
          </textarea>
          <FontAwesomeIcon icon={faSearch} className='searchIcon'/>
        </div>
      </div>
        <div className='contentContainer'>
            <div className='contentContainersWrapper'>
              <div className='jumboContainer'>
                <Jumbocarousel />
              </div>
              <div className='qrowContainer'>
                <QualityRow />
              </div>
            </div>
        </div>
        <div className='footerContainer'>
          <Footer />
        </div>
    </div>
  );
}

export default App;
