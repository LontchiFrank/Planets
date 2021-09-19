import React from 'react'
import './App.css'
import earth from './img/Jupiter.png'
function Globe4() {
    return (
        <div className="core">
        <div className="planet">
            <span>
            <img src={earth} alt='' className='img1' />
                </span>
           
        </div>
            <div className="planet-info">
                <div className="title">
                <h1>Jupiter</h1>
                </div>
                <div className="para">
            <h3>Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass more than two and a half times that of all the other planets in the Solar System combined, but slightly less than one-thousandth the mass of the Sun. Jupiter is the third-brightest natural object in the Earth's night sky</h3>
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

export default Globe4
