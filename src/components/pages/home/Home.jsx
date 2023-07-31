import axios from "axios";
import { useEffect, useState } from "react";

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
          return (
            <div key={movie.id}>
              <h2>{movie.name}</h2>
            </div>
          );
        })}
      </div>
    </>
  );
};
