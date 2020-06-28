import React from 'react';
import './Jumbocarousel.css';
import pic1 from './assets/img/pic1.png';
import pic2 from './assets/img/pic2.png';
import pic3 from './assets/img/pic3.png';
import { Fade } from 'react-slideshow-image';

const fadeImages = [
    pic1,
    pic2,   
    pic3
];

const fadeProperties = {
    duration: 3000,
    transitionDuration: 750,
    infinite: true,
    indicators: false,
    arrows: false,
    onChange: (oldIndex, newIndex) => {
      console.log(`fade transition from ${oldIndex} to ${newIndex}`);
    }
}

const Slideshow = () => {
    return (
      <div className='faderContainer'>
        <div className="slide-container">
          <Fade {...fadeProperties}>
            <div className="each-fade">
              <div className="image-container">
                <img src={fadeImages[0]} alt='slideshow entry'/>
              </div>
            </div>
            <div className="each-fade">
              <div className="image-container">
                <img src={fadeImages[1]} alt='slideshow entry'/>
              </div>
            </div>
            <div className="each-fade">
              <div className="image-container">
                <img src={fadeImages[2]} alt='slideshow entry'/>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    )
}

function Jumbocarousel() {
    return (
        <div className='carouselContainer'>
            <div className='carouselHeaderContainer'>
                <div className='carouselHeader'>
                    <h3> Get the best products here </h3>
                    <hr/>
                    <div className='carouselDescContainer'>
                        <p>
                            Lorem ipsum dolores es Lorem ipsum dolores esLorem ipsum dolores esLorem ipsum dolores esLorem ipsum dolores es
                            Lorem ipsum dolores es Lorem ipsum dolores esLorem ipsum dolores esLorem ipsum dolores esLorem ipsum dolores es
                            Lorem ipsum dolores es Lorem ipsum dolores esLorem ipsum dolores esLorem ipsum dolores esLorem ipsum dolores es
                            Lorem ipsum dolores es Lorem ipsum dolores esLorem ipsum dolores esLorem ipsum dolores esLorem ipsum dolores es
                            Lorem ipsum dolores es Lorem ipsum dolores esLorem ipsum dolores esLorem ipsum dolores esLorem ipsum dolores es
                        </p>
                    </div>
                </div>
            </div>
            <Slideshow />
        </div>
    );
}

export default Jumbocarousel;