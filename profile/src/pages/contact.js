import React from "react";
import "../App.css";
// import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

export default function Contact() {
return (
    <div className="Register">
    <p className="register__title">Register below</p>
    

    
        <form>
            <div className="form-group">
                <label> First Name</label>
                <input type="text" className="form-control" placeholder="First name" name="FirstName"  /></div>
            <div className="form-group">
                <label>Last Name</label>
                <input type="text" className="form-control" placeholder="Last Name" name="LastName"  /></div>
                <div className="form-group">
                    <input className="form-control" type="text" placeholder="Email" name="Email"  /></div>
                <div className="form-control" >
                    <input className="form" type="text" placeholder="Your Message Here" name="Message"  />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>

        </form>
        
    
</div>
    );
    }
