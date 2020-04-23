import React from 'react';
import Index from "./pages/index";
import "./App.css";
import Portfoliopg from "./pages/portfolio";
import Nav from "./components/Nav/nav";
import Contact from "./pages/contact";
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <h1>Welcome to my Profile</h1>
      </header>
      <Nav />
      <div>
        
        

        
        <Route exact path="/" component={Index} />
        <Route exact path="/portfolio" component={Portfoliopg} />
        <Route exact path="/contact" component={Contact} />

      </div>
      </div>

      </Router>
  );
}

export default App;
