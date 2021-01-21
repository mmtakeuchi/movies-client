import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import StarIcon from "@material-ui/icons/Star";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import MovieList from "./MovieList.css";
import { ThumbsUpDown } from "@material-ui/icons";

// const useStyles = makeStyles((theme) => ({
//   movies: {
//     display: "flex",
//     overflowX: "scroll",
//     overflowY: "hidden",
//     flexWrap: "nowrap",
//     justifyContent: "start",
//   },
//   poster: {
//     // position: "relative",
//     // transition: "transform 0.2s",
//     // "&:hover": {
//     //   cursor: "pointer",
//     //   // transform: "scale(1.1) translate3d(1.5ch,0,100px)",
//     //   boxShadow:
//     //     "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
//     // },
//     // "&:hover .button": {
//     //   opacity: "1",
//     // },
//     objectFit: "contain",
//     width: "100%",
//     maxHeight: "100px",
//     marginRight: "10px",
//     transition: "transform 450ms",
//     "&hover": {
//       transform: "scale(1.1)",
//     },
//   },
//   button: {
//     position: "absolute",
//     width: "100%",
//     transition: "0.5s ease",
//     opacity: "1",
//     top: "0",
//     textAlign: "right",
//     justifyContent: "center",
//     background:
//       "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
//   },
// }));

const FavoriteList = (props) => {
  // const classes = useStyles();

  if (props.favorites.length < 1) {
    return <div></div>;
  }
  return (
    <div clasName="row">
      <h2>Favorites</h2>
      <div className="movies">
        {props.favorites.map((movie) => {
          return (
            <>
              <img
                src={movie.Poster}
                alt={`${movie.Title} poster`}
                className="poster"
                key={movie.imdbId}
              ></img>
              <div className="button">
                <IconButton
                  color="secondary"
                  onClick={() => props.removeFavorite(movie)}
                >
                  <ThumbDownIcon />
                </IconButton>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default FavoriteList;

// return (
//   <div className="row">
//     <h2>{title}</h2>
//     <div className="row_posters">
//       {movies.map(movie => {
//         return <img
//           key={movie.id}
//           onClick={() => handleClick(movie)}
//           className={`row_poster ${isLargeRow && "row_posterLarge"}`}
//           src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
//           alt={movie.name} />
//       })}
//     </div>
//     <div style={{ padding: "40px" }}>
//       {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
//     </div>
//   </div>
// );
