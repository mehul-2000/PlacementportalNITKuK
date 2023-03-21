import React,{Component} from 'react';
import "./HallOfFame.css";

function HallOfFame(){
    return(
        <>

            <div className="main">

                <div className="inside">
                    <div className="first">
                        <h5>Placement Stats</h5>
                        <button type="button" className="btn btn-danger btn1">Placement Stats-2022 Batch</button>
                    </div>

                    <div className='first'>
                    <button type="button" className="btn btn-danger btn2">Filter</button>
                    <button type="button" className="btn btn-danger btn3">Sort By</button>
                    </div>

                    <div className='second'>
                        <span>Showing 0 candidates</span>
                    </div>

                    <div className="alert alert-warning alert-dismissible fade show alertBox" role="alert">
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