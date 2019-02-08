import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import newGallery from '../newGallery';
import './Details.css';

export default class Details extends React.Component {

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
        this.setState({
            showDetails
        });

    }



    render() {
        if (this.state.showDetails === undefined) {
            return <Redirect to='/not-found' />
        } else {
            return (
                <div className='Details'>
                    <h4>{this.state.showDetails.name}</h4>
                    <div className='crate is-small'>
                        <div className='crate'>
                            <img
                                src={this.state.showDetails.image}
                                alt={this.state.showDetails.name} />
                        </div>
                        <div className='crate'>
                            <div>{this.state.showDetails.synopsis}</div>
                        </div>
                    </div>
                    <Link to='/'>Back to Home Page</Link>
                </div>
            );

        }

    }

}
