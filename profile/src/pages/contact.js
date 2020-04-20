import React from "react";
import "./../App.css";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";


export default function Contact() {
return (
  <div className="Register">
  <p className="register__title">Register below</p>
  <form>
      <lable className="frmlbl">
          <FormGroup controlId="email" bsSize="large">
              Name:
         
          </FormGroup>
      </lable>
    
      <lable className="frmlbl">
      <FormGroup controlId="email" bsSize="large">
          Email:
          
      </FormGroup>
      </lable>
     
      <lable className="frmlbl">
      <FormGroup controlId="password" bsSize="large">
       Password:
      </FormGroup>
      </lable>
      <lable className="frmlbl">
      <FormGroup controlId="passwordconfirm" bsSize="large">
          Confirm Password:
         
      </FormGroup>
      </lable>
      <br />
      <Button className="btnsbmt" block bsSize="large"  type="submit">
          Submit
</Button>
</form>
</div>
    );
    }
