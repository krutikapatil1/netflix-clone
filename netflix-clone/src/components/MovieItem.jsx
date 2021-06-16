import "./MovieItem.css";
const IMG_BASE_PATH = "https://image.tmdb.org/t/p/original/";
const MovieItem = ({ movie, largeRow }) => {
  return (
    <img
      className={`movie-item ${largeRow && "movie-item__large"}`}
      src={
        largeRow
          ? `${IMG_BASE_PATH}${movie.poster_path}`
          : `${IMG_BASE_PATH}${movie.backdrop_path}`
      }
      alt="{movie.name}"
    />
  );
};
export default MovieItem;
