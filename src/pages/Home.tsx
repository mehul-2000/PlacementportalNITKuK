import React, { Component } from "react";
import "./Home.css";
import Navbar from "../components/Navbar/navbar";
import Carousel from "../components/Carousel/carousel";
import MiniCard from "../components/MiniCard/minicard";

import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Grid from "@mui/material/Grid";
import Fab from "@mui/material/Fab";
import NavigationIcon from "@mui/icons-material/Navigation";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import OfficialCard from "../components/OfficialCard/official-card";
const buttons = [
  <Button key="one">Placement Stats - 2021-22</Button>,
  <Button key="two">Placement Stats - 2020-21</Button>,
  <Button key="three">Placement Stats - 2019-20</Button>,
];
const content = (
  <div>
    {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo.
 Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.
 Sed malesuada lobortis pretium.`}
  </div>
);
function Home() {
  return (
    <>
      <Navbar />
      <Carousel />

      {/* Button/Links Section */}

      <Grid container>
        <Grid
          item
          sm={12}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h3 className="text-themecolor" style={{ marginTop: "1rem" }}>
            Portal Section
          </h3>
        </Grid>
        <Grid
          item
          xs
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={require("./logo1.png")} alt="Logo-Institute" />
          <Fab
            variant="extended"
            color="primary"
            aria-label="add"
            sx={{ backgroundColor: "#C21717" }}
          >
            <NavigationIcon sx={{ mr: 1 }} />
            NITKKR Placement Portal Link
          </Fab>
        </Grid>
        <Divider orientation="vertical" flexItem></Divider>
        <Grid
          item
          xs
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <h3 className="text-themecolor" style={{ marginTop: "1rem" }}>
            Placement Statistics
          </h3>
          <ButtonGroup
            orientation="vertical"
            aria-label="vertical contained button group"
            variant="text"
            color="error"
            size="large"
          >
            {buttons}
          </ButtonGroup>
        </Grid>
      </Grid>

      {/* About NIT Kurukshetra */}

      <div className="flex-container-1">
        <h3>About Us</h3>
        <div className="about-institute">
          <div>
            NIT Kurukshetra, formerly known as Regional Engineering College,
            Kurukshetra, was founded in 1963. It was conferred upon the NIT
            status with Deemed University on June 26, 2002. The Institute offers
            several courses in various disciplines of B.Tech., M.Tech., MBA and
            MCA, and Ph.D. with an annual intake of about 1500 students.
            Institute also provides excellent facilities for advanced research
            in the emerging areas of Engineering, Science, and Technology. The
            institute has well-qualified and dedicated faculty along with
            supporting staff, laboratories, and other infrastructure. The
            infrastructure is geared to enable the institute to produce
            technical personnel of high quality.
          </div>
        </div>
        <div className="vector-art">
          <img
            src="https://img.freepik.com/free-vector/illustration-university-graduates_53876-28466.jpg?size=626&ext=jpg"
            alt="University-pic"
          />
        </div>
      </div>

      {/* Values */}

      <div className="flex-container-2">
        <h3>Our Values : "Ksharamonavrat Chesta Ch"</h3>
        <MiniCard
          icon="People"
          title="Alumni"
          description="Our Alumni have emerged successful and excelled in varied professions across the globe. This network is highly enriching for the growth of our community."
        />
        <MiniCard
          icon="Rankings"
          title="Rankings"
          description="Recognized as one of the India’s top Engineering College, we strive for excellence. Our rankings are reflective of our steep progress."
        />
        <MiniCard
          icon="Edu"
          title="Quality"
          description="Nurturing the bright future of Nation through Quality Educational and Teaching methodologies by highly experienced faculties."
        />
      </div>
      <div className="director-corner">
        <h3>Director's Corner</h3>
        <hr />
        <br />
        <div className="director-section">
          <img
            src="https://nitkkr.ac.in/wp-content/uploads/2022/02/directorim.jpg"
            alt="director-pic"
            className="director-pic"
          />
        </div>
        <div className="director-message">
          <h4 className="director-title">Dr. (Prof.) BV Ramana Reddy</h4>
          <h5 className="institute">
            National Institute of Technology Kurukshetra
          </h5>
          <div className="message">
            India, the land of seekers, is at the cusp of becoming Vishwa Guru
            all over again after 1100 years of subjugation, wars, annexures and
            humiliation. It is again a free country due to the sacrifices made
            by our leaders, freedom fighters and has learnt the art of standing
            tall in the midst of many a challenge of building the nation with
            its rich diversity, cultures, languages all over again since the
            last 75 years. Unity in Diversity is our mantra while making our
            nation stronger in every sphere. I heartily welcome everyone who
            visits the Placement Portal of this institution
          </div>
        </div>
      </div>

      {/* TPO Section */}
      <h4 style={{ textAlign: "center", marginBottom: "1rem" }}>
        Office Holders
      </h4>
      <Box
        sx={{
          marginTop: "2rem",
          padding: "0.5rem",
          borderRadius: "1rem",
          backgroundColor: "#FFFFFF",
        }}
      >
        <Grid container spacing={4} sx={{ padding: "1rem" }}>
          <Grid item xs={12} sm={6} md={4}>
            <OfficialCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <OfficialCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <OfficialCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <OfficialCard />
          </Grid>
        </Grid>
      </Box>

      {/* Footer */}

      <footer className="text-center text-lg-start bg-dark text-white">
        {/* <!-- Section: Social media --> */}
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          {/* <!-- Left --> */}
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>
          {/* <!-- Left --> */}

          {/* <!-- Right --> */}
          <div>
            <a href="" className=" link-secondary">
              <i className="fa fa-facebook fa-lg mr-4"></i>
            </a>

            <a href="" className="link-secondary">
              <i className="fa fa-google fa-lg mr-4"></i>
            </a>

            <a href="" className="link-secondary">
              <i className="fa fa-linkedin fa-lg mr-4"></i>
            </a>

            <a href="" className="link-secondary">
              <i className="fa fa-youtube fa-lg mr-4"></i>
            </a>
          </div>
          {/* <!-- Right --> */}
        </section>
        {/* <!-- Section: Social media --> */}

        {/* <!-- Section: Links  --> */}
        <section className="">
          <div className="container text-center text-md-start mt-5">
            {/* <!-- Grid row --> */}
            <div className="row mt-3">
              {/* <!-- Grid column --> */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* <!-- Links --> */}
                <h6 className="text-uppercase fw-bold mb-4">Useful Links</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Invitation
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Major Recruiters
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Build a Relationshsip
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Placement Protocol
                  </a>
                </p>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4">
                {/* <!-- Links --> */}
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="#!" className="text-reset">
                    General Instructions
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    UG Internship Guidelines
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Reach US
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    FAQ
                  </a>
                </p>
              </div>
              {/* <!-- Grid column --> */}
              {/* <!-- Grid column --> */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* <!-- Content --> */}
                <h6 className="text-uppercase fw-bold mb-4">
                  T & P cell, NIT Kurukshetra
                </h6>
                <p>
                  The Training and Placement Cell is a nodal point of contact
                  for companies seeking to establish a fruitful relationship
                  with the institute.
                </p>
              </div>
              {/* <!-- Grid column --> */}
              {/* <!-- Grid column --> */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* <!-- Links --> */}
                <h6 className="text-uppercase fw-bold mb-4">Contact Us</h6>
                <p>
                  <i className="fa fa-home me-3 text-secondary"></i> Ground
                  Floor, Old Administrative Building, NIT Kurukshetra, Haryana,
                  India
                </p>
                <p>
                  <i className="fa fa-envelope me-3 text-secondary"></i>
                  tnp@nitkkr.ac.in
                </p>
                <p>
                  <i className="fa fa-phone me-3 text-secondary"></i> + 01 234
                  567 88
                </p>
              </div>
              {/* <!-- Grid column --> */}
            </div>
            {/* <!-- Grid row --> */}
          </div>
        </section>
        {/* <!-- Section: Links  --> */}
      </footer>
    </>
  );
}
export default Home;
