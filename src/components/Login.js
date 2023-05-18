import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../context/UserAuthContext";
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"></link>


var link = document.createElement('link');
 
// set the attributes for link element
link.rel = 'stylesheet';

link.type = 'text/css';


link.href = 'app.css';


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/home");
    } catch (error) {
      <h1>error</h1>
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home");
    } catch (error) {
      <h1>error</h1>
    }
  };
 
  return (
   
   <>
      <div className="p-4 box">
      <h1 style={{color:"white", textAlign:"center",margin:"25px"}}>Welcome Back!!</h1>
        <h2  style={{margin:"10px", color:"black",backgroundImage:"url('images.png')",borderRadius:"10px",height:"150px", width:"330px"}}></h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group style={{color:"black"}}>
            <Form.Control 
              type="email"
              placeholder="Email address"
              style={{margin:"5px",width:"340px", height:"50px",borderRadius:"10px",borderBottomColor:"black"}}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>


          <Form.Group>
            <Form.Control
              type="password"
              placeholder="Password"
              onclick="toggleVisibility()"
             
              
            
              style={{ margin:"5px",width:"340px", height:"50px",borderRadius:"10px",borderBottomColor:"black"}}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
     

          <div className="">
            <Button style={{margin:"5px",color:"white",fontSize:"25px" ,borderRadius:"10px",width:"340px" ,height:"60px",borderColor:"white"}} variant="primary" type="Submit">
              Log In
            </Button>
          </div>
        </Form>
        <hr />
        <div>
          <GoogleButton
            className="g-btn"
            type="light"
            style={{width:"350px", pading:"10px",height:"60px",borderRadius:"10px",borderBottomColor:"black"}}
            onClick={handleGoogleSignIn}
           
          />
        </div>
        <Link to="/phonesignup">
          <div className="d-grid gap-2 mt-3">
            <Button style={{color:"white",fontSize:"25px" ,borderRadius:"10px",width:"350px" ,height:"70px",borderColor:"black"}}  variant="success" type="Submit">
              Sign in with Phone
            
            </Button>
          </div>
        </Link>
      </div>
      <div className="p-4 box mt-3 text-center"style={{color:"white",fontSize:"20px" }} >
        Don't have an account? <Link to="/signup" style={{color:"skyblue",fontSize:"20px" }}>Sign up</Link>
      </div> 
      </>
  );
};

export default Login;
