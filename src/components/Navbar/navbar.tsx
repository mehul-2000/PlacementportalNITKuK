import React from "react";
import "./navbarstyles.css";
function Home() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="logoHead">
          <a className="navbar-brand" href="#">
            <img
              src="./logo.png"
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt=""
              style={{ marginRight: "1.5rem" }}
            />
            NIT Kurukshetra Placement Portal
          </a>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Overview <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About NIT KKR
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Office Holders
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Director's Message
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Recruitment Process
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Home;
