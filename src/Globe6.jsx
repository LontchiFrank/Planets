import React from 'react'
import './App.css'
import earth from './img/Uranus.png'
function Globe6() {
    return (
        <div className="core">
        <div className="planet">
            <span>
            <img src={earth} alt='' className='img1' />
                </span>
           
        </div>
            <div className="planet-info">
                <div className="title">
                <h1>Uranus</h1>
                </div>
                <div className="para">
            <h3>Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus, who, according to Greek mythology, was the great-grandfather of Ares (Mars), grandfather of Zeus (Jupiter) and father of Cronus (Saturn). It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System. Uranus is similar in composition to Neptune.</h3>
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

export default Globe6
