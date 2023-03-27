import React from 'react';
import Footer from '../../components/Footer/footer';
import SideNavBar from "../../components/Sidenavbar/sidenavbar";
import styles from "./Register.module.css";

export default function Login() {
  return (
    <>
    <SideNavBar/>
    <div className={styles.container} style={{backgroundColor:"#edf1f5",width:"100vw"}}>
    <div className={styles.row}>
      <div className="col-md-6 offset-md-3">
        <div className="card my-5">

          <form className="card-body cardbody-color p-lg-5">

            <div className="text-center">
              <img src={require("../../pages/logo1.png")} className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                width="200px" alt="profile"/>
            </div>


            <div className="mb-3">
              <input type="text" className="form-control" id="Username" aria-describedby="emailHelp"
                placeholder="Username"/>
            </div>
            <div className="mb-3">
              <input type="password" className="form-control" id="password" placeholder="Password"/>
            </div>
            <div className="text-center"><button type="submit" className="btn btn-color px-5 mb-5 w-100">Register</button></div>
            <div id="emailHelp" className="form-text text-center mb-5 text-dark">Already
              Registered? <a href="/login" className="text-dark fw-bold"> Login </a>
            </div>
          </form>
        </div>

      </div>
    </div>
  </div>
 

  







<Footer/>
    </>
  )
}

