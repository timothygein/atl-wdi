import React, { Component } from 'react'
import Movie from './Movie'

class MoviesList extends Component {
    render() {
        const movies = [
          {title: "Blade Runner 2049", rating: "R", description: "This is gonna be good"},
          {title: "Titanic", rating: "PG-13", description: "The best of all time"},
          {title: "The Town", rating: "R", description: "Greatness"}
        ]
    
        const movieComponents = movies.map((movie) => {
          return <Movie title={movie.title} rating={movie.rating} description={movie.description} />
        })
        
        return (
          <div>
            { movieComponents }
         </div>

        )
    }
}

export default MoviesList