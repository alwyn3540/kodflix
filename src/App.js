import React, { Component } from 'react';
import  movieposter from './oldtimeimage.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <img src ={movieposter} alt = 'old film poster'/>
       <br />
       <br />
       <br />
       <div className= 'crate'>
          <div className = 'item'>High Noon</div>
          <div className = 'item'>Annie Hall</div>
          <div className = 'item'>Star Wars</div>
          </div>
          <div className= 'crate'>
          <div className = 'item'>Mad Max</div>
          <div className = 'item'>Top Gun</div>
          <div className = 'item'>Jaws</div>
        </div>
      </div>
    );
  }
}

export default App;
