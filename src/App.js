import React, { useState } from "react";
import Search from "./components/Search";
import MovieList from "./components/MovieList/MovieList";
import AddMovie from "./components/AddMovie";
import { moviesData } from "./data";
import "./App.css";

const App = () => {
  const [movies, setMovies] = useState(moviesData);
  const [searchRate, setSearchRate] = useState(1);
  const [searchValue, setSearchValue] = useState("");

  //handleSearch
  const handleSearch = (event) => setSearchValue(event.target.value);
  //handleSearchRate
  const handleSearchRate = (newRate) => setSearchRate(newRate);

  //Add Movie
  const addMovie = (newMovie) => setMovies([...movies, newMovie]);
  return (
    <div>
      <Search
        searchValue={searchValue}
        handleSearch={handleSearch}
        searchRate={searchRate}
        handleSearchRate={handleSearchRate}
      />
      <MovieList
        movieList={movies.filter(
          (movie) =>
            movie.name
              .toLowerCase()
              .includes(searchValue.toLowerCase().trim()) &&
            movie.rating >= searchRate
        )}
      />
      <AddMovie handleAdd={addMovie} />
    </div>
  );
};

export default App;
