import React, { useState, useEffect } from "react";
import Search from "./components/Search";
import "./App.css";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  return (
    <div>
      <p>Movies Found: {movies.length}</p>
      <Search query={query} setQuery={setQuery} />
    </div>
  );
};

export default App;
