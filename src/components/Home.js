import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";

const Home = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <div className="p-4 box">
      <h2 style={{color:"white", textAlign:"center",margin:"25px"}}>You are in!!</h2>
        <h2  style={{ margin:"5px",borderRadius:"10px",color:"black",backgroundImage:"url('images.png')", height:"150px"}}></h2>
      <div style={{color:"white", textAlign:"center", fontSize:"25px"}} className="p-4 box mt-3 text-center">
        Hello !!!!<br />
        {user.tel}
        {user && user.email}
      </div>
      <div className="d-grid gap-2">
        <Button style={{color:"white",fontSize:"25px" ,borderRadius:"10px",width:"350px" ,height:"70px",borderColor:"white"}}  Log Invariant="primary" onClick={handleLogout}>
          Log out
        </Button>
      </div>
      </div>
    </>
  );
};

export default Home;
