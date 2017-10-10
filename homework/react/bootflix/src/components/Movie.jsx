import React from "react";

// Update this Movie component with info from OMDB
// BONUS: Use OMDB's Poster API to add a poster to each movie.
const Movie = (props) => {
  return (
    <section id="movie-listing">
      <div className="movie">
        <h3>Movie Title: {props.title}</h3>
        <p>
          <strong>Released: {props.year}</strong> 1984<br />
          <strong>Directed By: {props.director}</strong> Some director<br />
          <em>Genre:{props.genre}</em>
        </p>
        <p>Plotline should go inside of here</p>
      </div>
    </section>
  );
};

export default Movie;


