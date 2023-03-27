import Grid from "@mui/material/Grid";
import DeveloperCard from "../../components/AboutCard/about-card";
import Box from "@mui/material/Box";
import SideNavbar from "../../components/Sidenavbar/sidenavbar";
import "./Developer.css";
import React from "react";
function Developer() {
  return (
    <React.Fragment>
    
      <div className="developer-page-wrapper">
        <div className="col-md-5 align-self-center">
          <h5 className="text-themecolor" style={{ marginTop: "1rem",marginLeft:"3rem" }}>
            Developer's Corner
          </h5>
        </div>
        <Box
          sx={{
            marginTop: "1rem",
            padding: "1.5rem",
            borderRadius: "1rem",
            backgroundColor: "#FFFFFF",
            marginLeft:"3rem"
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <DeveloperCard />
            </Grid>
            <Grid item xs={12} md={4}>
              <DeveloperCard />
            </Grid>
            <Grid item xs={12} md={4}>
              <DeveloperCard />
            </Grid>
          </Grid>
        </Box>
      </div>
    </React.Fragment>
  );
}

export default Developer;
