import { Button } from "@mui/material";
import styles from "./header.module.css";

export const Header = ({ setFavourite }) => {
  return (
    <div className={styles.header}>
      <h1>Películas</h1>
      <div>
        <Button
          sx={{ color: "#daa525" }}
          onClick={() => {
            setFavourite(false);
          }}
        >
          Todas
        </Button>
        <Button
          sx={{ color: "#daa525" }}
          onClick={() => {
            setFavourite(true);
          }}
        >
          Favoritas
        </Button>
      </div>
    </div>
  );
};
