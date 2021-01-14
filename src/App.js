import React, { useState, useEffect } from "react";
import axios from "axios";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faHeart, faCoffee } from "@fortawesome/free-solid-svg-icons";
import Container from "@material-ui/core/Container";
import Search from "./components/Search";
import MovieList from "./components/MovieList";
import FavoriteList from "./components/FavoriteList";
import "./App.css";

const App = () => {
  library.add(fab, faHeart, faCoffee);
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [like, setLike] = useState(false);

  const searchMovies = async (query) => {
    query = query.length > 1 ? query.split(" ").join("_") : query;

    const baseURL = "http://www.omdbapi.com/";

    try {
      const response = await axios.get(
        `${baseURL}?s=${query}&apikey=${process.env.REACT_APP_OMDB_KEY}`
      );
      const data = response.data.Search;

      if (data) setMovies(data);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    searchMovies(query);
  }, [query]);

  const addFavorite = (movie) => {
    const newFavorites = [...favorites, movie];
    setFavorites(newFavorites);
  };

  const removeFavorite = (movie) => {
    const newFavorites = favorites.filter(
      (favorite) => favorite.imdbID !== movie.imdbID
    );

    setFavorites(newFavorites);
  };

  const isLiked = (like) => {
    like = !like;
    setLike(like);
  };

  return (
    <div>
      <Container maxWidth="lg">
        <Search query={query} setQuery={setQuery} />
        <p>Movies Found: {movies.length}</p>
        <MovieList
          movies={movies}
          addFavorite={addFavorite}
          isLiked={isLiked}
        />
        <FavoriteList
          favorites={favorites}
          removeFavorite={removeFavorite}
          isLiked={isLiked}
        />
      </Container>
    </div>
  );
};

export default App;
