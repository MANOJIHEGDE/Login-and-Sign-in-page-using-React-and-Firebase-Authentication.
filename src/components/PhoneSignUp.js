import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useUserAuth } from "../context/UserAuthContext";

const PhoneSignUp = () => {
  const [error, setError] = useState("");
  const [number, setNumber] = useState("");
  const [flag, setFlag] = useState(false);
  const [otp, setOtp] = useState("");
  const [result, setResult] = useState("");
  const { setUpRecaptha } = useUserAuth();
  const navigate = useNavigate();

  const getOtp = async (e) => {
    e.preventDefault();
    console.log(number);
    setError("");
    if (number === "" || number === undefined)
      return setError("Please enter a valid phone number!");
    try {
      const response = await setUpRecaptha(number);
      setResult(response);
      setFlag(true);
    } catch (err) {
      setError(err.message);
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    setError("");
    if (otp === "" || otp === null) return;
    try {
      await result.confirm(otp);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <div className="p-4 box">
      <h2 style={{color:"white", textAlign:"center",margin:"25px"}}>Sign In Via Phone!!</h2>
        <h2  style={{borderRadius:"10px",color:"black",backgroundImage:"url('images.png')", height:"150px"}}></h2>
        
        <Form onSubmit={getOtp} style={{ display: !flag ? "block" : "none" }}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <PhoneInput
              defaultCountry="IN"
              value={number}
              onChange={setNumber}
              placeholder="Enter Phone Number to generate OTP"
              style={{margin:"5px",padding:"5px"}}
              
             
            />
            <div style={{width:"350px"}} id="recaptcha-container"></div>
          </Form.Group>
          <div className="button">
          <Link to="/">
              <Button style={{color:"black",fontSize:"25px" ,borderRadius:"10px",width:"150px" ,height:"50px",borderColor:"black" , alignContent:"left"}}   variant="secondary">Cancel</Button>
            </Link>
            &nbsp;
              <Button style={{color:"white",fontSize:"25px" ,borderRadius:"10px",width:"150px" ,height:"50px",borderColor:"white" , alignContent:"left"}}    type="submit" variant="primary">
                Send Otp
              </Button>
          </div>
        </Form>
        
        <Form onSubmit={verifyOtp} style={{ display: flag ? "block" : "none" }}>
          <Form.Group className="mb-3" controlId="formBasicOtp">
            <Form.Control
              type="otp"
              placeholder="Enter OTP"
              onChange={(e) => setOtp(e.target.value)}
              style={{width:"350px", height:"70px",borderRadius:"10px",borderBottomColor:"black"}}
            />
          </Form.Group>
          <div className="button">
          <Button style={{color:"white",fontSize:"25px" ,borderRadius:"10px",width:"350px" ,height:"70px",borderColor:"white"}}  type="submit" variant="primary">
              Verify
            </Button>
          
          
          <Link to="/">
            <Button style={{color:"black",fontSize:"25px" ,borderRadius:"10px",width:"350px" ,height:"70px",borderColor:"black"}}   variant="secondary">Cancel</Button>
            </Link>
            &nbsp;
            
            
            
          </div>
        </Form>
      </div>
    </>
  );
};

export default PhoneSignUp;
