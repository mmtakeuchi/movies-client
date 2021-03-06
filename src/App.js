import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from "@material-ui/core/Container";
import Search from "./components/Search";
import MovieList from "./components/MovieList";
import "./App.css";

const App = () => {
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

  const isLiked = () => {
    setLike(!like);
  };

  return (
    <div>
      <Container maxWidth="lg">
        <Search query={query} setQuery={setQuery} />

        <MovieList
          movies={movies}
          favorite={addFavorite}
          isLiked={isLiked}
          icon="ThumbUp"
        />
        <MovieList
          movies={favorites}
          favorite={removeFavorite}
          isLiked={isLiked}
          icon="ThumbDown"
        />
      </Container>
    </div>
  );
};

export default App;
