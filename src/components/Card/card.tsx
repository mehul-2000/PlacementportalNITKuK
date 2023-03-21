import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";

import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";

import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CardDetails(props: any) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345, border: "0.5px solid red" }}>
      <CardMedia
        className="card-media"
        style={{
          margin: "2px auto 2px auto",
          width: "50%",
          borderRadius: "50%",
          height: "11rem",
          marginTop: "1rem",
        }}
        component="img"
        height="194"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl_ViCeRAVuTeTpljv0Qwt-x3_1GzX-6JIVQ&usqp=CAU"
        alt="img"
      />
      <CardContent>
        <Typography
          sx={{ textAlign: "center" }}
          variant="body2"
          color="text.secondary"
        >
          Dr. ABC Kumar
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Typography>Faculty-Placement-Coordinator{props.name}</Typography>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Department of Computer Engineering</Typography>
          <Typography paragraph>
            Contact Details :- <br />
            Email :- abc@gmail.com <br />
            Contact No. :- +91-79089XXXXX
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
