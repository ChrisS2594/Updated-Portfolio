import React from "react";
import "./style.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";


export default function Nav() {

return(
  <Router>
  <nav id="nav" role="navigation">
  <a href="#nav" title="Show navigation">Show navigation</a>
  <a href="#" title="Hide navigation">Hide navigation</a>

  <ul>
    <li><Link to="/">Contact Me</Link> </li>
    <li>
      {/* <Dropdown.toggle variant="success" id="dropdown-basic"><span>Pages</span></Dropdown.toggle>
    <DropdownMenu>
      <Dropdownitem Link to="/overfishing">Over Fishing</Dropdownitem>
      <Dropdownitem Link to="/pollution">Pollution</Dropdownitem>
      <Dropdownitem Link to="/redtide">Red Tide</Dropdownitem>
      </DropdownMenu> */}
      </li>

    <li><Link to="Index"><span>About Me</span></Link></li>
    <li><Link to="Portfolio">Portfolio</Link></li>
  </ul>

</nav>
</Router>
);
}