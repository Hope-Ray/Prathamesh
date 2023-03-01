import React,{useState} from "react";
import Home from "../Home/Home";
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import "../Navbar/Navbar.css";
import { Link } from "react-router-dom";


const Navbar = () => {


  const googleSuccess = async (res) => {
    const token = res?.credential;
    const result = jwt_decode(token);

    try {
      console.log(result);

    } catch (error) {
      console.log(error);
    }

  }

  const googleFailure = () => {
    console.log("Gooogle Sign In was unsuccessful, Try later");
  }
  return (
    <>
      <header className="navbar">
        <div className="heading">
          <h2>
            <Link to="/">Wordplay</Link>
          </h2>
        </div>
        <nav>
          <ul className="nav_links">
            <li>
              <Link to="/">
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/rules">
                <span>Game</span>
              </Link>
            </li>
            <li>
              <Link to="/rules">
                <span>Rules</span>
              </Link>
            </li>
            <li>
              <span>Help</span>
            </li>
            <li>
              <span>Contact</span>
            </li>
          </ul>
        </nav>
          <div className="buttons">
          <GoogleLogin 
              render={(renderProps) => (
                <Button 
                className={classes.googleButton} 
                color='primary' 
                fullWidth 
                onClick={renderProps.onClick} 
                disabled={renderProps.disabled} 
                variant="contained" 
                startIcon={<Icon /> }>
                  Google Sign In
                </Button>

              )}
              onSuccess={googleSuccess}
              onError={googleFailure}
              cookiePolicy="single_host_origin"
            />
            <Link to="">
              <button className="btn1">Register</button>
            </Link>

            <Link to="">
              <button  className="btn2">Login</button>

            </Link>
          </div>
        
      </header>
    </>
  );
};

export default Navbar;
