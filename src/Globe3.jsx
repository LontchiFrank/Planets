import React from "react";
import "./App.css";
import earth from "./img/earth2.blend";
function Globe3() {
  return (
    <div className="core">
      <div className="planet">
        <span>
          <img src={earth} alt="" className="img1" />
        </span>
      </div>
      <div className="planet-info">
        <div className="title">
          <h1>Venus</h1>
        </div>
        <div className="para">
          <h3>
            Venus is the second planet from the Sun. It is named after the Roman
            goddess of love and beauty. As the brightest natural object in
            Earth's night sky after the Moon, Venus can cast shadows and can be,
            on rare occasions, visible to the naked eye in broad daylight.Venus
            lies within Earth's orbit, and so never appears to venture far from
            the Sun.
          </h3>
        </div>
        <div className="overview">
          <div className="over1">Overview</div>
          <div className="over">Internal structure</div>
          <div className="over">Surface Geology</div>
        </div>
      </div>
    </div>
  );
}

export default Globe3;
