import React, { Component } from 'react'
import Review from './Review';
import ReviewsList from './ReviewsList'
class Movie extends Component {

    render(){
        return (
            <div>
              <h1>{ this.props.title }</h1>
  
              <div>Rating: { this.props.rating }</div>
              <p>Description: { this.props.description }
              </p>

                <ReviewsList />
            </div>
        );
        
    }
}

export default Movie
