import React, { Component } from "react";

function Carousel() {
  return (
    <>
      <div className="carousel-item active">
        <img
          className="d-block w-100"
          src="https://nitkkr.ac.in/wp-content/uploads/2022/01/24131961_285405678647849_426967072086000359_o.jpg"
          alt="First slide"
          style={{ height: "35rem" }}
        />
        <div
          className="carousel-caption"
          style={{
            marginBottom: "3rem",
            marginRight: "20rem",
            color: "white",
            fontFamily: "Inter,sans-serif",
            backgroundColor: "black",
            opacity: "0.8",
            borderRadius: "1rem",
            padding: "20px 20px 20px 20px",
          }}
        >
          <h1 style={{ width: "fit-content", opacity: "1" }}>
            One Stop Portal for Placements/Internships
          </h1>
          <p style={{ textAlign: "left" }}>
            Welcome to the recruitment website For NIT Kurukshetra. NIT is
            India's foremost industrial leadership development institution. Our
            Graduates are a combination of rigorous thinking, hardwork and
            fundamental stronghold. They are nurtured by the institute to strive
            for excellence and deliver impact in their field of work. Let us
            begin...
          </p>
        </div>
      </div>
    </>
  );
}

export default Carousel;
