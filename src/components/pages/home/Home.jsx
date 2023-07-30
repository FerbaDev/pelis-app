import axios from "axios";
import { useEffect } from "react";

export const Home = () => {
  useEffect(() => {
    axios
      .get(" http://localhost:5000/movies")
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }, []);

  return <div>Home</div>;
};
