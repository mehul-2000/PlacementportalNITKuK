import React, { Component } from "react";
import "./Announcement.css";
function Announcement() {
  return (
    <>
      <div className="main_wrapper">
        <div className="first">
          <div className="left">
            <h4>Announcements</h4>
          </div>
          <div className="right">
            <button
              type="button"
              className="btn btn-danger"
              data-toggle="modal"
              data-target="#exampleModalCenter"
            >
              Add Announcement
            </button>

            <div
              className="modal fade"
              id="exampleModalCenter"
              tabIndex={-1}
              role="dialog"
              aria-labelledby="exampleModalCenterTitle"
              aria-hidden="true"
            >
              <div
                className="modal-dialog modal-dialog-centered"
                role="document"
              >
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">
                      New Announcement
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="form-group">
                        <label htmlFor="exampleFormControlSelect1">
                          Select Category
                        </label>
                        <br></br>
                        <select
                          className="form-select form-select-sm"
                          aria-label=".form-select-sm example"
                        >
                          <option selected>--Select Announcement Category</option>
                          <option value="1">Information Update</option>
                          <option value="2">Result Announcement</option>
                          <option value="3">New Company Information</option>
                          <option value="3">Other</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleFormControlSelect1">
                          Select Passout Batch
                        </label>
                        <br></br>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                        >
                          <option selected>--Select Batch--</option>
                          <option value="1">2020</option>
                          <option value="2">2021</option>
                          <option value="3">2022</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">
                          Add Announcement Here
                        </label>
                        <textarea
                          className="form-control"
                          id="exampleFormControlTextarea1"
                          rows={3}
                        ></textarea>
                      </div>
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-danger"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="button" className="btn btn-success">
                      Post Now!
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="second">
          <div className="card">
            <div className="card-body">2022 Batch</div>
          </div>

          <div style={{marginTop:"2rem"}}>
            <span >No Announcements!</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Announcement;
