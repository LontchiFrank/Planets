import React, { useRef } from "react";
import Planets from "./Planets";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Planets />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
