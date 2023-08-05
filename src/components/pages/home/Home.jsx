import axios from "axios";
import { useEffect, useState } from "react";
import { CardMovie } from "../../common/cardMovie/CardMovie";
import styles from "./home.module.css";
import { Header } from "../../common/header/Header";
import { Button } from "@mui/material";
import { CreateMovieModal } from "../../common/CreateMovie/CreateMovieModal/CreateMovieModal";

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [tieneLike, setTieneLike] = useState(false);
  const [favourite, setFavourite] = useState(false);
  const [isMovieCreated, setIsMovieCreated] = useState(false);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    axios
      .get("http://localhost:5000/movies")
      .then((res) => setMovies(res.data))
      .catch((err) => console.log(err));

    setTieneLike(false);
    setIsMovieCreated(false);
  }, [tieneLike, isMovieCreated]);

  const handleLike = (movie) => {
    axios
      .patch(`http://localhost:5000/movies/${movie.id}`, {
        isLiked: !movie.isLiked,
      })
      .then((res) => setTieneLike(true))
      .catch((err) => console.log(err));
  };

  const moviesLiked = movies.filter((movie) => movie.isLiked);

  return (
    <>
      <Header setFavourite={setFavourite} />
      <Button onClick={handleOpen}>Agregar peli</Button>
      <CreateMovieModal
        open={open}
        handleClose={handleClose}
        setIsMovieCreated={setIsMovieCreated}
      />
      <div className={styles.container}>
        {!favourite
          ? movies.map((movie) => {
              return (
                <CardMovie
                  key={movie.id}
                  movie={movie}
                  handleLike={handleLike}
                />
              );
            })
          : moviesLiked.map((movie) => {
              return (
                <CardMovie
                  key={movie.id}
                  movie={movie}
                  handleLike={handleLike}
                />
              );
            })}
      </div>
    </>
  );
};
