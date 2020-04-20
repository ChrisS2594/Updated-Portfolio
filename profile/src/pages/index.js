import React from "react";
import { Route, Router, Link} from "react-router-dom";
import "./../assets/images/portfolio.jpg";
import Portfolioimg from "./portfolio";
import "./../App.css";

export default function index() {
return(
 <div>
   <h2>About Me</h2>
   <img className="img thumbnail center-block" src={Portfolioimg} alt="Portfolio Picture" width="50%"></img>
    <p>Hello! My name is Christopher Stephens and welcome to my portfolio. I am a hard working individual who enjoys figuring out how things work. Which is what led me to become interested in coding and development. I like seeing the innerworkings of something and trying to understand the reasoning behind why it works the way it does.  </p>
      
 </div>




);
}
