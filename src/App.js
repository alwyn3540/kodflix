import React, { Component } from 'react';
import tvPoster1 from './images/tvposter1.jpeg';
import tvPoster2 from './images/tvposter2.jpeg';
import tvPoster3 from './images/tvposter3.jpeg';
import tvPoster4 from './images/tvposter4.jpeg';
import tvPoster5 from './images/tvposter5.jpeg';
import tvPoster6 from './images/tvposter6.jpeg';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <br />
        <br />
        <br />
        <div className='crate'>
          <div className='item'>
            <img src={tvPoster1} alt='old film poster' />
            sideswiped
          </div>
          <div className='item'>
            <img src={tvPoster2} alt=' rights free poster' />
            Women on The Verge
          </div>
          <div className='item'>
            <img src={tvPoster3} alt='rights free poster' />
            The Tracey Morgan Show
          </div>
        </div>
        <div className='crate'>
          <div className='item'>
            <img src={tvPoster4} alt='rights free poster' />
            The Men who Built America
          </div>
          <div className='item'>
            <img src={tvPoster5} alt='rights free poster' />
            Atlanta
          </div>
          <div className='item'>
            <img src={tvPoster6} alt='rights free poster' />
              Out of this World

            
            
          </div>
        </div>
      </div>
    );
  }
}

export default App;
