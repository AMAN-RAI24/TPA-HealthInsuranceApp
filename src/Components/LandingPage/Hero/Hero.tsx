import React, { useEffect, useState } from "react";
import "./hero.scss";
// import image from '../../../Assets/Images/insuranceImage.jpg'
import image from "../../../Assets/Images/insuranceImage-removebg-preview.png";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  useEffect(() => {
    if (localStorage.getItem("jwt") != null) {
      setLoggedIn(true);
    }
  });

  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();
  function routeTo(route: string) {
    navigate("/" + route);
  }
  return (
    <div className="hero-container">
      <div className="heroContent">
        <h1 className="title1">
          Insurance To Protect You <br /> And Your Family.
        </h1>
        <p className="heroText">
          This is a TPA Webpage where Corporates can design a group Insurance
          suitable for their needs.
        </p>
        {loggedIn ? (
          <p style={{ fontWeight: "bold" }}>
            Hey {localStorage.getItem("name")} !Welcome to Insure-corp
          </p>
        ) : (
          <div className="buttons">
            <Button variant="outlined" onClick={() => routeTo("signup")}>
              Sign Up
            </Button>
            <Button variant="outlined" onClick={() => routeTo("login")}>
              Log In
            </Button>
          </div>
        )}
      </div>
      <Box sx={{ overflow: "hidden" }}>
        <img src={image} alt="" />
      </Box>
    </div>
  );
};

export default Hero;
