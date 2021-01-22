import React from "react";
import IconButton from "@material-ui/core/IconButton";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import "./MovieList.css";

const MovieList = (props) => {
  if (props.movies.length < 1) {
    return <div></div>;
  }
  return (
    <div clasName="row">
      <p>Movies Found: {props.movies.length}</p>
      <h2>Movies</h2>
      <div className="movies">
        {props.movies.map((movie) => {
          return (
            <React.Fragment key={movie.imdbId}>
              <img
                src={movie.Poster}
                alt={`${movie.Title} poster`}
                className="poster"
                key={movie.imdbId}
              ></img>
              <div className="button">
                <IconButton
                  color="secondary"
                  onClick={() => props.favorite(movie)}
                >
                  {props.icon === "ThumbUp" ? (
                    <ThumbUpIcon />
                  ) : (
                    <ThumbDownIcon />
                  )}
                </IconButton>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default MovieList;
