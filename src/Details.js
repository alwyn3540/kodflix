import React from 'react';
import { Link } from 'react-router-dom';
import newGallery from './newGallery';

export default class Details extends React.Component{

    constructor() {
        super();
        this.state = {
             showDetails: {}
        };
    }
        componentDidMount() {
           let showId = this.props.match.params.showId;
           let showDetails = newGallery()
           .find((showDetails) => showDetails.id === showId);        
       this.setState ({
            showDetails
       });
        
   }
           
        

    render () {
        return (
            <div>
                <h4>{this.state.showDetails.name}</h4>
                <Link to='/'>Back to Home Page</Link>
            </div>
    
        );
    }
}
