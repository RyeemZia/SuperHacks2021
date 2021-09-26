import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/navbar.component";
import DataLog from "./components/data-log.component"

function App() {
  return (
    <Router>
      <Navbar />
      <br/>
      <Route Path="/" exact component={DataLog} />
    </Router>
    
  );
}

export default App;
