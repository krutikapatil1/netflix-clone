import { useEffect, useState } from "react";
import axios from "../axios";
import "./Banner.css";
const Banner = ({ fetchUrl }) => {
  const [movie, setMovie] = useState();
  useEffect(() => {
    const fetchBanner = async () => {
      const movies = await (await axios.get(fetchUrl)).data.results;
      setMovie(movies[Math.floor(Math.random() * movies.length - 1)]);
    };
    fetchBanner();
  }, [fetchUrl]);
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
            "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
        )`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__contents__heading">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div>
          <button className="banner__contents__button">Play</button>
          <button className="banner__contents__button">My List</button>
        </div>
        <p className="banner__contents_overview">{movie?.overview}</p>
      </div>
      <div className="banner__fadeBottom"></div>
    </header>
  );
};
export default Banner;
