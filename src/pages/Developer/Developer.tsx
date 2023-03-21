import Grid from "@mui/material/Grid";
import DeveloperCard from "../../components/AboutCard/about-card";
import Box from "@mui/material/Box";
import "./Developer.css";
function Developer() {
  return (
    <>
      <div className="developer-page-wrapper">
        <div className="col-md-5 align-self-center">
          <h5 className="text-themecolor" style={{ marginTop: "1rem" }}>
            Developer's Corner
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
    </>
  );
}

export default Developer;
