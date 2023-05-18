import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <div className="p-4 box">
      <h2 style={{color:"white", textAlign:"center",margin:"25px"}}>Create Your Account!!</h2>
        <h2  style={{ margin:"5px",borderRadius:"10px",color:"black",backgroundImage:"url('images.png')", height:"150px"}}></h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="Name">
            <Form.Control
              type="Name"
              placeholder="Name"
              style={{margin:"5px",width:"340px", height:"50px",borderRadius:"10px",borderBottomColor:"black"}}
               />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              style={{margin:"5px",width:"340px", height:"50px",borderRadius:"10px",borderBottomColor:"black"}}
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              style={{margin:"5px",width:"340px", height:"50px",borderRadius:"10px",borderBottomColor:"black"}}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button style={{color:"white",fontSize:"25px" ,borderRadius:"10px",width:"350px" ,height:"55px",borderColor:"white"}}  variant="primary" type="Submit">
              Sign up
            </Button>
          </div>
        </Form>
      </div>
      <div className="p-4 box mt-3 text-center" style={{color:"white",fontSize:"20px" }}>
        Already have an account? <Link to="/" style={{color:"skyblue",fontSize:"20px" }}> Log In</Link>
      </div>
    </>
  );
};

export default Signup;
