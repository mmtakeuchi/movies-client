import React from "react";
import IconButton from "@material-ui/core/IconButton";
import StarIcon from "@material-ui/icons/Star";

const FavoriteList = (props) => {
  if (props.favorites.length < 1) {
    return <div></div>;
  }
  return (
    <div>
      Favorites
      {props.favorites.map((movie) => (
        <div key={movie.imdbID}>
          <IconButton
            color="primary"
            onClick={() => props.removeFavorite(movie)}
          >
            <StarIcon />
          </IconButton>
          <h3>{movie.Title}</h3>
          <img src={movie.Poster} alt={`${movie.Title} poster`}></img>
        </div>
      ))}
    </div>
  );
};

export default FavoriteList;
