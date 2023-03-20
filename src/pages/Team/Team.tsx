import React from "react";

import Grid from "@mui/material/Grid";
import Card from "../../components/Card/card";
import Box from "@mui/material/Box";
import "./Team.css";
function TeamPage() {
  return (
    <>
      <div className="team-page-wrapper">
        <div className="row page-titles">
          <div className="col-md-5 align-self-center">
            <h5 className="text-themecolor">Faculty In-Charge</h5>
          </div>

          {/* <!-- Teams --> */}
          <div className="col-md-7 align-self-center text-right">
            <div className="dropdown show">
              <a
                className="btn btn-danger btn-secondary dropdown-toggle"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Placement Team
              </a>

              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a className="dropdown-item" href="#">
                  Team 2022-23
                </a>
                <a className="dropdown-item" href="#">
                  Team 2021-22
                </a>
                <a className="dropdown-item" href="#">
                  Team 2020-21
                </a>
              </div>
            </div>
          </div>
        </div>
        <Box
          sx={{
            marginTop: "2rem",
            padding: "1.5rem",
            borderRadius: "1rem",
            backgroundColor: "#FFFFFF",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
              <Card />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card />
            </Grid>
          </Grid>
        </Box>
        <div className="col-md-5 align-self-center">
          <h5 className="text-themecolor" style={{ marginTop: "1rem" }}>
            Student Placement Co-ordinators (PG)
          </h5>
        </div>
        <Box
          sx={{
            marginTop: "1rem",
            padding: "1.5rem",
            borderRadius: "1rem",
            backgroundColor: "#FFFFFF",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
              <Card />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card />
            </Grid>
          </Grid>
        </Box>

        <div className="col-md-5 align-self-center">
          <h5 className="text-themecolor" style={{ marginTop: "1rem" }}>
            Student Placement Co-ordinators (UG)
          </h5>
        </div>
        <Box
          sx={{
            marginTop: "1rem",
            padding: "1.5rem",
            borderRadius: "1rem",
            backgroundColor: "#FFFFFF",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
              <Card />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card />
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
}

export default TeamPage;
