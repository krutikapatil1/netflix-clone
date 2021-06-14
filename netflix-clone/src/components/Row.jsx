import "./Row.css";
import MovieItem from "./MovieItem";
import axios from "../axios";
import { useState, useEffect } from "react";
import requests from "../requests";
const Row = ({ title, fetchUrl, largeRow }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getMovies = async () => {
      setMovies(await (await axios.get(fetchUrl)).data.results);
    };
    getMovies();
  }, [fetchUrl]);
  console.log(movies);
  return (
    <div>
      <h1>{title}</h1>
      <div className="row-posters">
        {movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} largeRow={largeRow} />
        ))}
      </div>
    </div>
  );
};
export default Row;
