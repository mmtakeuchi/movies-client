import React from "react";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";

const MovieList = (props) => {
  return (
    <div>
      {props.movies.map((movie) => (
        <div key={movie.imdbID}>
          <IconButton color="primary" onClick={() => props.addFavorite(movie)}>
            <StarBorderIcon />
          </IconButton>

          <h3>{movie.Title}</h3>
          <img src={movie.Poster} alt={`${movie.Title} poster`}></img>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
