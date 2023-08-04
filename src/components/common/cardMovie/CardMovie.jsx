import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";

export const CardMovie = ({ movie, handleLike }) => {
  return (
    <Card sx={{ maxWidth: 345, height: 500 }}>
      <CardHeader title={movie.name} subheader={movie.createdAt} />
      <CardMedia
        component="img"
        height="194"
        image={movie.img}
        alt="Paella dish"
      />
      <CardContent sx={{ height: 150 }}>
        <Typography variant="body2">{movie.description}</Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon
            color={movie.isLiked ? "error" : "disabled"}
            onClick={() => handleLike(movie)}
          />
        </IconButton>
      </CardActions>
    </Card>
  );
};
