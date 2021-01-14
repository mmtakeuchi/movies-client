import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "nowrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  title: {
    color: "white",
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
}));

const MovieList = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList
        className={classes.gridList}
        cellHeight={200}
        spacing={1}
        cols={2.5}
      >
        {props.movies.map((movie) => (
          <GridListTile key={movie.imdbId}>
            <img src={movie.Poster} alt={`${movie.Title} poster`} />
            <GridListTileBar
              title={movie.Title}
              titlePosition="top"
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton
                  aria-label={`star ${movie.Title}`}
                  onClick={() => props.addFavorite(movie)}
                >
                  <StarBorderIcon className={classes.title} />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export default MovieList;
