import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Jumbocarousel from './Components/Jumbo/Jumbocarousel.js';
import QualityRow from './Components/QualityRow/qrow.js';

function App() {
  return (
    <div className='App'>
      <div className='navbar'>
        <div className='navbarTitle'>
          <h3> TomyVet </h3>
        </div>
        <div className='navbarLinks'>
          <a href='#'> Home </a>
          <p> | </p>
          <a href='#'> Products </a>
          <p> | </p>
          <a href='#'> Contact </a>
        </div>
        <div className='navbarSearch'>
          <textarea className='searchForm' maxLength='25'>
          </textarea>
          <FontAwesomeIcon icon={faSearch} className='searchIcon'/>
        </div>
      </div>
        <Jumbocarousel />
        <QualityRow />
    </div>
  );
}

export default App;
