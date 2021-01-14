import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import StarIcon from "@material-ui/icons/Star";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    overflowX: "scroll",
    overflowY: "hidden",
    flexWrap: "nowrap",
    justifyContent: "space-between",
  },
  poster: {
    marginRight: "1em",
  },
}));

const FavoriteList = (props) => {
  const classes = useStyles();

  if (props.favorites.length < 1) {
    return <div></div>;
  }
  return (
    <React.Fragment>
      Favorites
      <div className={classes.root}>
        {props.favorites.map((movie) => (
          <div key={movie.imdbID} className={classes.poster}>
            <IconButton
              color="primary"
              onClick={() => props.removeFavorite(movie)}
            >
              <StarIcon />
            </IconButton>
            {/* <h3>{movie.Title}</h3> */}
            <img src={movie.Poster} alt={`${movie.Title} poster`}></img>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default FavoriteList;
