import React from "react";
import "./footer.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Box, Grid } from "@mui/material";
// import logo from "../../Assets/Images/avatar.jpg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import logo from "../../Assets/nav-bar-logo.png";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        // height: 340,
        marginTop: "50px",
        backgroundColor: "#cbc4c7",
        color: "black",
        // "&:hover": {
        //   backgroundColor: "primary.main",
        //   opacity: [0.9, 0.8, 0.7],
        // },
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginLeft: "40px",
          marginBottom: "0px",
        }}
        className="spacing-heading"
      >
        <span
          style={{ height: "100px", fontSize: "1.5em", paddingTop: "20px" }}
        >
          <img style={{ maxWidth: "90%" }} src={logo} alt="" />
        </span>
      </div>

      <div className="spacing-heading">
        <p>Contact us</p>
        <p>
          Insure Corp Private Limited, 414, Off Veer Sawarkar Marg, near Siddhi{" "}
          <br /> Vinayak Temple, Prabhadevi Banglore-500678.
        </p>
        <p>
          Email: customersupport@ourtpa.com <br />
          Fax no: 040 2234657
        </p>
      </div>

      <Grid
        item
        spacing={0.5}
        sx={{
          display: "flex",
          gap: "10px",
          marginLeft: "50px",
          marginBottom: "1%",
        }}
      >
        <FacebookIcon />
        <TwitterIcon />
        <LinkedInIcon />
        <YouTubeIcon />
        <InstagramIcon />
      </Grid>
    </Box>
  );
};

export default Footer;
