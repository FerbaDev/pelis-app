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

  console.log("movies:", movies);

  return <div>Home</div>;
};
