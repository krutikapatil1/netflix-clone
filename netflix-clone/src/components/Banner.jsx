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
        backgroundImage: `url(
            "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
        )`,
      }}
    >
      <div className="banner__contents">
        <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
      </div>
      <div className="banner__fadeBottom"></div>
    </header>
  );
};
export default Banner;
