import React from "react";

import "../index.css";
import { Route, Router, Link } from "react-router-dom";


export default function Portfolio() {
return(
  <Router>
<div>
<h1> Group Projects</h1>
<ul>
  <li><Link to="HTTPS://chriss2594.github.io/Project-1-C1/">Group Project 1: Travel Application</Link></li>
  <li><Link to="#">Group Project 2: Rate My Roomie </Link></li>
  <li><Link to="#">Group Project 3: Ocean Consercation (Using React)</Link></li>
</ul>
 
</div>
</Router>
);
}

