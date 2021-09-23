import React from 'react'
import './App.css'
import earth from './img/Saturn.png'
function Globe5() {
    return (
        <div className="core col-sm-3 col-md-6 col-lg-12">
        <div className="planet">
            <span>
            <img src={earth} alt='' className='img1' />
                </span>
           
        </div>
            <div className="planet-info">
                <div className="title">
                <h1>Saturn</h1>
                </div>
                <div className="para py-2 px-4">
            <h3>Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth.It only has one-eighth the average density of Earth; however, with its larger volume, Saturn is over 95 times more massive</h3>
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

export default Globe5
