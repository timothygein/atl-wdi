import React, { Component } from 'react'
import Review from './Review'


class ReviewsList extends Component {
    render() {
        const reviews = [
          {title: "Blade Runner 2049", rating: "R", description: "This is gonna be good"},
          {title: "Titanic", rating: "PG-13", description: "The best of all time"},
          {title: "The Town", rating: "R", description: "Greatness"}
        ]
    
        const reviewsComponents = reviews.map((review) => {
          return <Review title={review.title} rating={review.rating} description={review.description} />
        });

        return (
          <div>
            { reviewsComponents }
         </div>
        )

      }
    }
    
        export default ReviewsList     