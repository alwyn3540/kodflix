import React, { Component } from 'react';
import Gallery from './Gallery';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path='/' component={Gallery} />
          <Route exact path='/:details' component={Details} />
          
        </div>
      </Router>

    );
  }
}
function Details() {
   return (
     <div><h4>Hello, this will be the details page for each Movie & TV show </h4></div>
   
   )
}



export default App;
