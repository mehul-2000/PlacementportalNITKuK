import React, { Component } from "react";
import "./Home.css";
import Navbar from "../components/Navbar/navbar";
import Carousel from "../components/Carousel/carousel";
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
        <div>Hi</div>
        <div>Hi</div>
        <div>Hi</div>
        <div>Hi</div>
      </div>
    </>
  );
}
export default Home;
