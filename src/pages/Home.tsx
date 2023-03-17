import React, { Component } from "react";
import "./Home.css";
import Navbar from "../components/Navbar/navbar";
import Carousel from "../components/Carousel/carousel";
import MiniCard from "../components/MiniCard/minicard";

function Home() {
  return (
    <>
      <Navbar />
      <Carousel />

      {/* Button/Links Section */}
      <div className="flex-container">
        <h3>Links for Redirecting to Respective Portals...</h3>
        <button type="button" className="btn btn-danger btn-lg">
          Placement Officer
        </button>
        <button type="button" className="btn btn-secondary btn-lg">
          Student Coordinators
        </button>
        <button type="button" className="btn btn-danger btn-lg">
          Students
        </button>
      </div>

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

      <div className="office-bearers"></div>
    </>
  );
}
export default Home;
