import React from "react";

const FavoriteList = (props) => {
  if (!props.favorites) {
    return <div></div>;
  }
  return (
    <div>
      {props.favorites.map((movie, i) => (
        <div key={`${i}`}>
          <p onClick={() => props.removeFavorite(movie)}>DisLike</p>
          <h3>{movie.Title}</h3>
          <img src={movie.Poster} alt={`${movie.Title} poster`}></img>
        </div>
      ))}
    </div>
  );
};

export default FavoriteList;
