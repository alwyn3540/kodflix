import React from 'react';
import { Link } from 'react-router-dom';


export default class Details extends React.Component{

    constructor() {
        super();
        this.state = {
            detailsPage: 'Hello, this will be the details page for each Movie & TV show '    
            };
        }

        componentDidMount() {
            setTimeout (() => {
                this.setState ( {
                    detailsPage:'Great TV shows on Kodflix!'
                });
            }, 2000);
        }
    render () {
        return (
            <div>
                <h4>{this.state.detailsPage}</h4>
                <Link to='/'>Back to Home Page</Link>
            </div>
        );
    }
}
