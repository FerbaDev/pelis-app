import { Button } from "@mui/material";
import styles from "./header.module.css";

export const Header = () => {
  return (
    <div className={styles.header}>
      <h1>Películas</h1>
      <div>
        <Button sx={{ color: "#daa525" }}>Todas</Button>
        <Button sx={{ color: "#daa525" }}>Favoritas</Button>
      </div>
    </div>
  );
};
