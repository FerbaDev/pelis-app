import axios from "axios";
import { useEffect, useState } from "react";
import { CardMovie } from "../../common/cardMovie/CardMovie";
import styles from "./home.module.css";
import { Header } from "../../common/header/Header";

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [tieneLike, setTieneLike] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5000/movies")
      .then((res) => setMovies(res.data))
      .catch((err) => console.log(err));

    setTieneLike(false);
  }, [tieneLike]);

  const handleLike = (movie) => {
    axios
      .patch(`http://localhost:5000/movies/${movie.id}`, {
        isLiked: !movie.isLiked,
      })
      .then((res) => setTieneLike(true))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Header />
      <div className={styles.container}>
        {movies.map((movie) => {
          return (
            <CardMovie key={movie.id} movie={movie} handleLike={handleLike} />
          );
        })}
      </div>
    </>
  );
};
