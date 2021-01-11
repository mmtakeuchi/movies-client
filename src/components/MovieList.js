import React from "react";

const MovieList = (props) => {
  return (
    <div>
      {props.movies.map((movie, i) => (
        <div key={`${i}`}>
          <h3>{movie.Title}</h3>
          <img src={movie.Poster} alt={`${movie.Title} poster`}></img>
        </div>
      ))}
    </div>
  );
};

export default MovieList;