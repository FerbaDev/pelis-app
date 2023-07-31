import axios from "axios";
import { useEffect, useState } from "react";
import { CardMovie } from "../../common/cardMovie/CardMovie";

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(" http://localhost:5000/movies")
      .then((res) => setMovies(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div>
        {movies.map((movie) => {
          return <CardMovie key={movie.id} movie={movie} />;
        })}
      </div>
    </>
  );
};
