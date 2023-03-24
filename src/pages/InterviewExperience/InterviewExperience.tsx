import React from 'react';
import "./InterviewExperience.css";
import Footer from "../../components/Footer/footer";

function InterviewExperience() {
  return (
    <>
    <div className="main_wrapper">
        <div className="first">
            <h4>Interview Experiences</h4>
            <span>Read about the interview experiences your college mates have been through</span>
        </div>
        <div className="second">
            <div className="left" style={{display:"flex",flexDirection:"column",backgroundColor:"white",padding:"1rem", width:"25%"}}>
            <button type="button" className="btn btn-outline-success" style={{margin:"0.5rem"}}>Add Experience</button>
            <button type="button" className="btn btn-outline-danger" style={{margin:"0.5rem"}}>Check Guidelines</button>
            </div>
            <div className="right" style={{backgroundColor:"white",padding:"1rem", width:"55%"}}>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Add Tags</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <small id="emailHelp" className="form-text text-muted">Try tags like amazon,microsoft,placement etc.</small>
            </div>
            </div>
        </div>
        {/* <Footer/> */}
    </div>
    </>
  );
}
export default InterviewExperience;
