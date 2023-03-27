import React, { Component } from "react";
import Box from '@mui/material/Box';
import styles from "./Contact.module.css";
import SideNavbar from "../../components/Sidenavbar/sidenavbar";

function Contact(){
    return(
        <React.Fragment>
    
    <div className={styles.main}>
        <h4 style={{marginTop:"2rem"}}>Contact Details</h4>
        <div className={styles.details} style={{backgroundImage:"url('https://nitkkr.ac.in/wp-content/uploads/2022/01/24131961_285405678647849_426967072086000359_o.jpg')"}}>
            <div style={{backgroundColor:"rgba(255, 255, 255, 0.6)", height:"100%",borderRadius:"10px"}}>

            <div className={styles.inside}>
                <div>
                <img  className='contact-logo' src={require("../logo1.png")}></img>
                </div>
                <div>
                <h5><b>Placement and Training Cell</b></h5>
                <span>National Institute of Technology,Kurukshetra</span>
                <br></br>
                <span>Thanesar,Kurukshetra-136119</span>
                <br></br>
                <span>Haryana,India</span>
                <br></br>

                <h5><b>Phone</b></h5>
                <span>+01744-233208</span>

                <h5><b>Placement Related Queries</b></h5>
                <span>registrar@nitkkr.ac.in</span>
                </div>
            </div>
            </div>

        </div>
            


      
  </div>
        </React.Fragment>
    );
}

export default Contact;