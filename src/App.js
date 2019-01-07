import React, { Component } from 'react';
import  movieposter from './oldtimeimage.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <img src ={movieposter} alt = 'old film poster'/>
      </div>
    );
  }
}

export default App;
