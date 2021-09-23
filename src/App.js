import React,{useEffect} from 'react'
import Planets from './Planets';
import { BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import './App.css';
import * as THREE from 'three'
import Globe from './Globe';
import Globe1 from './Globe1';

function App() {
  return (
      <Router>
         <div className="App">
         <Switch>
         <Planets />
     <Route exact path='/earth' exact component={Globe}  />
     <Route exact path='/mercury' exact component={Globe1}  />
     </Switch>
    
    
    
    </div>
      </Router>
   
  );
}

export default App;
