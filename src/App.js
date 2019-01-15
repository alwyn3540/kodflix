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
        <br /><br /><br />
        <div className='crate'>
          <div className='item'>
            <img src={tvPoster1} alt='old film poster' />
            <div className='overlay'>
              <h3>sideswiped</h3>
            </div>
          </div>
          <div className='item'>
            <img src={tvPoster2} alt=' rights free poster' />
            <div className='overlay'>
              <h3>Women on The Verge</h3>
            </div>
          </div>
          <div className='item'>
            <img src={tvPoster3} alt='rights free poster' />
            <div className='overlay'>
              <h3>The Tracey Morgan Show</h3></div>
          </div>
        </div>
        <div className='crate'>
          <div className='item'>
            <img src={tvPoster4} alt='rights free poster' />
            <div className='overlay'>
              <h3>The Men who Built America</h3>
            </div>
          </div>
          <div className='item'>
            <img src={tvPoster5} alt='rights free poster' />
            <div className= 'overlay'>
             <h3>Atlanta</h3>
          </div>
          </div>
          <div className='item'>
            <img src={tvPoster6} alt='rights free poster' />
            <div className='overlay'>
            <h3>Out of This World</h3>
            </div>
        



          </div>
        </div>
      </div>
    );
  }
}

export default App;
