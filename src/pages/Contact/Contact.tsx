import React, { Component } from "react";
import Box from '@mui/material/Box';
import "./Contact.css";

function Contact(){
    return(
        <>
    <div className="main">
        <h4>Contact Details</h4>
        <div className="details" style={{backgroundImage:"url('https://nitkkr.ac.in/wp-content/uploads/2022/01/24131961_285405678647849_426967072086000359_o.jpg')"}}>
            <div style={{backgroundColor:"rgba(255, 255, 255, 0.6)", height:"100%",borderRadius:"10px"}}>

            <div className="inside">
                <div>
                <img src="https://o.remove.bg/downloads/7abbb01e-f2e7-40a7-8141-5e62f4ffdead/logo-removebg-preview.png"></img>
                </div>
                <div>
                <h5>Placement and Training Cell</h5>
                <span>National Institute of Technology,Kurukshetra</span>
                <br></br>
                <span>Thanesar,Kurukshetra-136119</span>
                <br></br>
                <span>Haryana,India</span>
                <br></br>

                <h5>Phone</h5>
                <span>+01744-233208</span>

                <h5>Placement Related Queries</h5>
                <span>registrar@nitkkr.ac.in</span>
                </div>
            </div>
            </div>

        </div>
            


        <div className="text-center p-3 footer" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>© 2023:
    <a className="text-dark" target="{_blank}" href="https://nitkkr.ac.in//" style={{color:"white"}}>NIT Kurukshetra All rights reserved</a>
  </div>

  </div>
        </>
    );
}

export default Contact;