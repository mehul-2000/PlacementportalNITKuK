import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";

export default function OfficialCard() {
  return (
    <Card sx={{ display: "flex", height: "10rem" }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl_ViCeRAVuTeTpljv0Qwt-x3_1GzX-6JIVQ&usqp=CAU"
        sx={{ width: "40%" }}
      />
      <CardContent sx={{ textAlign: "center" }}>
        <Typography gutterBottom variant="h5" component="div">
          Mr. ABC Kumar
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Dean IIR <br />
          National Institute of Technology, Kurukshetra
        </Typography>
      </CardContent>
    </Card>
  );
}
