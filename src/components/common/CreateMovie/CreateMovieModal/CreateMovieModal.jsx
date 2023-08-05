import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const CreateMovieModal = ({ open, handleClose, setIsMovieCreated }) => {
  let initialValues = {
    name: "",
    description: "",
    img: "",
    createdAt: "",
  };

  const onSubmit = (data) => {
    let peliNueva = {
      name: data.name,
      description: data.description,
      img: data.img,
      createdAt: data.createdAt,
      isLiked: false,
    };

    axios
      .post("http://localhost:5000/movies", peliNueva)
      .then((res) => {
        handleClose();
        setIsMovieCreated(true);
      })
      .catch((err) => console.log(err));
  };

  const { handleChange, handleSubmit } = useFormik({
    initialValues,

    onSubmit,
  });

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Agregar película
          </Typography>
          <form
            action=""
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "center",
              height: "400px",
            }}
            onSubmit={handleSubmit}
          >
            <TextField
              id="outlined-basic"
              label="Título"
              variant="outlined"
              fullWidth
              name="name"
              onChange={handleChange}
            />
            <TextField
              id="outlined-basic"
              label="Fecha"
              variant="outlined"
              fullWidth
              name="createdAt"
              onChange={handleChange}
            />
            <TextField
              id="outlined-basic"
              label="Descripción"
              variant="outlined"
              fullWidth
              name="description"
              onChange={handleChange}
            />

            <TextField
              id="outlined-basic"
              label="URL de la imagen"
              variant="outlined"
              fullWidth
              name="img"
              onChange={handleChange}
            />
            <Button variant="contained" type="submit">
              Agregar
            </Button>
          </form>
        </Box>
      </Modal>
    </>
  );
};
