import React from 'react'
// import Globe from './Globe'
import {Link,Route} from 'react-router-dom'
import earth from './img/earth1.png'
// import earth1 from './img/earth2.png'
import Globe from './Globe';
import Globe1 from './Globe1';
import Globe2 from './Globe2';
import Globe3 from './Globe3';
import Globe4 from './Globe4';
import Globe5 from './Globe5';
import Globe6 from './Globe6';
import Globe7 from './Globe7';
import './App.css'
function Planets() {
    return (
        <div>
            <div className="universe">
                <div className='heads'>
                    <div className="topic">
                        <h2>The Planets</h2>
                    </div>
                    <div className='planets-links'>
                        <Link to='/mercury' className='nav'>Mercury</Link>
                        <Link to='/venus'  className='nav'>Venus</Link>
                        <Link to='/earth' className='nav'>Earth</Link>
                        <Link to='/mars' className='nav'>Mars</Link>
                        <Link to='/jupiter' className='nav'>Jupiter</Link>
                        <Link to='/saturn' className='nav'>Saturn</Link> 
                        <Link to='/uranus' className='nav'>Uranus</Link> 
                        <Link to='/neptune' className='nav'>Neptune</Link> 
                    </div>
                    <div class="dropdown">
    <button class="dropbtn">Dropdown 
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
  </div> 
                </div>
                <Route exact path='/earth' exact component={Globe}  />
             <Route exact path='/mercury' exact component={Globe1}  />
             <Route exact path='/mars' exact component={Globe2}  />
             <Route exact path='/venus' exact component={Globe3}  />
             <Route exact path='/jupiter' exact component={Globe4}  />
             <Route exact path='/saturn' exact component={Globe5}  />
             <Route exact path='/uranus' exact component={Globe6}  />
             <Route exact path='/neptune' exact component={Globe7}  />
                <div className="footer">
                    <div className="foot">
                        <h6>Rotation Time</h6>
                        <h2>0.99 DAYS</h2>
                    </div>
                    <div className="foot">
                    <h6>Revolution Time</h6>
                        <h2>365.26 DAYS</h2>
                    </div>
                    <div className="foot">
                    <h6>Radius</h6>
                        <h2>6,371 KM</h2>
                    </div>
                    <div className="foot">
                    <h6>Average Temp</h6>
                        <h2>16°C</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Planets
