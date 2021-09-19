import React from "react";
import './App.css'
import earth from './img/earth1.png'
function Globe() {
  
    return (
      <div className="core">
      <div className="planet">
          <span>
          <img src={earth} alt='' className='img1' />
              </span>
         
      </div>
          <div className="planet-info">
              <div className="title">
              <h1>Earth</h1>
              </div>
              <div className="para">
          <h3>Earth is the third planet from the Sun and the only astronomical object known to harbor.The remaining 70.8% is covered with water, mostly by oceans, seas, gulfs, and other salt-water bodies, but also by lakes, rivers, and other freshwater, which together constitute the hydrosphere.</h3>
              </div>
          <div className="overview">
              <div className="over1">
                  Overview</div>
              <div className="over">Internal structure</div>
              <div className="over">Surface Geology</div>
          </div>
          </div>
      </div>
    )
}

export default Globe
