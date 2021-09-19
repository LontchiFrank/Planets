import React from 'react'
import './App.css'
import earth from './img/Mars.png'
function Globe2() {
    return (
        <div className="core">
        <div className="planet">
            <span>
            <img src={earth} alt='' className='img1' />
                </span>
           
        </div>
            <div className="planet-info">
                <div className="title">
                <h1>Mars</h1>
                </div>
                <div className="para">
            <h3>Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet". The latter refers to the effect of the iron oxide prevalent on Mars's surface.</h3>
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

export default Globe2
