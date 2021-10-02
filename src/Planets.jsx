import React from "react";
// import Globe from './Globe'
import { Link, Route } from "react-router-dom";
import earth from "./img/earth1.png";
// import earth1 from './img/earth2.png'
import Globe from "./Globe";
import Globe1 from "./Globe1";
import Globe2 from "./Globe2";
import Globe3 from "./Globe3";
import Globe4 from "./Globe4";
import Globe5 from "./Globe5";
import Globe6 from "./Globe6";
import Globe7 from "./Globe7";
import "./App.css";
function Planets() {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  // hamburger.addEventListener("click", mobileMenu);

  function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  }
  return (
    <div>
      <div className="universe">
        <div className="heads">
          <div className="topic">
            <h2>The Planets</h2>
          </div>

          <header class="header">
            <nav class="navbar">
              {/* <a href="#" class="nav-logo">WebDev.</a> */}

              <ul class="nav-menu p-0">
                <li class="nav-item m-0">
                  {/* <a href="#" class="nav-link">Services</a> */}
                  <Link to="/mercury" className="nav-link">
                    Mercury
                  </Link>
                </li>
                <li class="nav-item m-0">
                  {/* <a href="#" class="nav-link">Blog</a> */}
                  <Link to="/venus" className="nav-link">
                    Venus
                  </Link>
                </li>
                <li class="nav-item m-0">
                  {/* <a href="#" class="nav-link">About</a> */}
                  <Link to="/earth" className="nav-link">
                    Earth
                  </Link>
                </li>
                <li class="nav-item m-0">
                  {/* <a href="#" class="nav-link">Contact</a> */}
                  <Link to="/mars" className="nav-link">
                    Mars
                  </Link>
                </li>
                <li class="nav-item m-0">
                  {/* <a href="#" class="nav-link">Contact</a> */}
                  <Link to="/jupiter" className="nav-link">
                    Jupiter
                  </Link>
                </li>
                <li class="nav-item m-0">
                  {/* <a href="#" class="nav-link">Contact</a> */}
                  <Link to="/saturn" className="nav-link">
                    Saturn
                  </Link>
                </li>
                <li class="nav-item m-0">
                  {/* <a href="#" class="nav-link">Contact</a> */}
                  <Link to="/uranus" className="nav-link">
                    Uranus
                  </Link>
                </li>
                <li class="nav-item m-0">
                  {/* <a href="#" class="nav-link">Contact</a> */}
                  <Link to="/neptune" className="nav-link">
                    Neptune
                  </Link>
                </li>
              </ul>
              <div class="hamburger" onClick={() => mobileMenu()}>
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
              </div>
            </nav>
          </header>
          </div>
        <Route exact path="/earth" exact component={Globe} />
        <Route exact path="/mercury" exact component={Globe1} />
        <Route exact path="/mars" exact component={Globe2} />
        <Route exact path="/venus" exact component={Globe3} />
        <Route exact path="/jupiter" exact component={Globe4} />
        <Route exact path="/saturn" exact component={Globe5} />
        <Route exact path="/uranus" exact component={Globe6} />
        <Route exact path="/neptune" exact component={Globe7} />
        <div className="footer col-12 col-sm-12 col-md-6 col-lg-12 p-3 p-sm-3 p-md-3 p-lg-3 p-xl-4 ">
          <div className="foot  col-xs-2 col-sm-12 col-md-2 ">
            <h6>Rotation Time</h6>
            <h4>0.99 DAYS</h4>
          </div>
          <div className="foot  col-xs-2 col-sm-12 col-md-2">
            <h6>Revolution Time</h6>
            <h4>365.26 DAYS</h4>
          </div>
          <div className="foot  col-xs-2 col-sm-12 col-md-2">
            <h6>Radius</h6>
            <h4>6,371 KM</h4>
          </div>
          <div className="foot  col-xs-2 col-sm-12 col-md-2">
            <h6>Average Temp</h6>
            <h4>16°C</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Planets;
