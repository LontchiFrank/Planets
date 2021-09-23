import React from 'react'
import './App.css'
import earth from './img/Neptune.png'
function Globe7() {
    return (
        <div className="core col-sm-3 col-md-6 col-lg-12">
        <div className="planet">
            <span>
            <img src={earth} alt='' className='img1' />
                </span>
           
        </div>
            <div className="planet-info">
                <div className="title">
                <h1>neptune</h1>
                </div>
                <div className="para py-2 px-4">
            <h3>Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, and the densest giant planet. It is 17 times the mass of Earth, slightly more massive than its near-twin Uranus. Neptune is denser and physically smaller than Uranus because its greater mass causes more gravitational compression of its atmosphere.</h3>
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

export default Globe7
