import React,{Component} from 'react';
import styles from "./HallOfFame.module.css";
import SideNavBar from "../../components/Sidenavbar/sidenavbar"

function HallOfFame(){
    return(
        <>
            <SideNavBar/>
            <div className={styles.main}>

                <div className={styles.inside}>
                    <div className={styles.first}>
                        <div><h5>Placement Stats</h5></div>
                        <div><button type="button" className={`btn btn-danger ${styles.btn1}`}>Placement Stats-2022 Batch</button></div>
                    </div>

                    <div className={styles.first}>
                    <button type="button" className={`btn btn-danger ${styles.btn2}`}>Filter</button>
                    <button type="button" className={`btn btn-danger ${styles.btn3}`}>Sort By</button>
                    </div>

                    <div className={styles.second}>
                        <span>Showing 0 candidates</span>
                    </div>

                    <div className={`alert alert-warning alert-dismissible fade show ${styles.alertBox}`} role="alert">
                    Reach out to us if you have secured any off/on-campus offer and your name is not updated here yet!
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    </div>

                </div>

            

            <div className="text-center p-3 footer" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>© 2023:
            <a className="text-dark" target="{_blank}" href="https://nitkkr.ac.in//" style={{color:"white"}}>NIT Kurukshetra All rights reserved</a>
            </div>

            </div>
        </>
    );
}
export default HallOfFame;