import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
export default function AboutDeveloperCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        style={{
          margin: "2px auto 2px auto",
          width: "50%",
          borderRadius: "50%",
          marginTop: "1rem",
        }}
        component="img"
        height="194"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl_ViCeRAVuTeTpljv0Qwt-x3_1GzX-6JIVQ&usqp=CAU"
        alt="Developer Image"
      />
      <CardContent>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ textAlign: "center" }}
        >
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions
        disableSpacing
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <IconButton aria-label="add to favorites">
          <FacebookIcon />
        </IconButton>
        <IconButton aria-label="share">
          <InstagramIcon />
        </IconButton>
        <IconButton aria-label="share">
          <LinkedInIcon />
        </IconButton>
        <IconButton aria-label="share">
          <TwitterIcon />
        </IconButton>
        <IconButton aria-label="share">
          <GitHubIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
