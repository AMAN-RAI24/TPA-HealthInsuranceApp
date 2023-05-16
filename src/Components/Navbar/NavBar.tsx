import React, { useEffect, useState } from "react";
import { Avatar, Box, Menu, MenuItem, Typography } from "@mui/material";
import avatar from "../../Assets/Images/avatar.jpg";
import logo from "../../Assets/nav-bar-logo.png";

import "./navbar.scss";
import "./styles.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { logout } from "../../Utitlity/Services/authentication";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (localStorage.getItem("role") != null) {
      setRole("" + localStorage.getItem("role"));
    }
    if (localStorage.getItem("jwt") != null) {
      setLoggedIn(true);
    }
  });
  const [open, setOpen] = useState(false);
  const [role, setRole] = useState("VIEW");
  const [loggedIn, setLoggedIn] = useState(false);

  function logoutHandler() {
    logout();
    setLoggedIn(false);
    setRole("VIEW");
    navigate("/login");
  }
  const selectedTabStyle = {
    color: "#880e4f",
  };
  return (
    <NewNavBar />
    //   <header>
    //     <nav className="navbar">
    //       <Box className="logo"> INSURE CORP </Box>
    //       <ul className="nav-items">
    //         <Link style={location.pathname == "/" ? selectedTabStyle : {}} to="/">
    //           <li>HOME</li>
    //         </Link>
    //         <Link
    //           style={location.pathname == "/about" ? selectedTabStyle : {}}
    //           to="/about"
    //         >
    //           <li>ABOUT US</li>
    //         </Link>
    //         <Link
    //           style={
    //             location.pathname == "/manager-dashboard" ||
    //             location.pathname == "/userviewpolicy"
    //               ? selectedTabStyle
    //               : {}
    //           }
    //           to={role == "ROLE_USER" ? "/userviewpolicy" : "/manager-dashboard"}
    //         >
    //           <li>DASHBOARD</li>
    //         </Link>
    //         {loggedIn ? (
    //           <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
    //             <li>
    //               <Typography variant="h6" sx={{ alignItems: "center" }}>
    //                 {" "}
    //                 User Name
    //               </Typography>
    //             </li>
    //             <li>
    //               <Avatar
    //                 alt="Travis Howard"
    //                 src={avatar}
    //                 onClick={(e) => setOpen(true)}
    //               />
    //             </li>
    //           </Box>
    //         ) : (
    //           ""
    //         )}
    //       </ul>
    //       <Box
    //         sx={{
    //           display: {
    //             xs: "block",
    //             sm: "block",
    //             md: "block",
    //             lg: "none",
    //             flexWrap: "wrap",
    //           },
    //         }}
    //       >
    //         <ul className="responsive-event">
    //           <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
    //             <li>
    //               <Typography variant="h6" sx={{ alignItems: "center" }}>
    //                 {" "}
    //                 User Name
    //               </Typography>
    //             </li>
    //             <li>
    //               <Avatar
    //                 alt="Travis Howard"
    //                 src={avatar}
    //                 onClick={(e) => setOpen(true)}
    //               />
    //             </li>
    //           </Box>
    //         </ul>
    //       </Box>
    //       <Menu
    //         id="demo-positioned-menu"
    //         aria-labelledby="demo-positioned-button"
    //         open={open}
    //         onClose={(e) => setOpen(false)}
    //         anchorOrigin={{
    //           vertical: "top",
    //           horizontal: "right",
    //         }}
    //         transformOrigin={{
    //           vertical: "top",
    //           horizontal: "right",
    //         }}
    //       >
    //         <MenuItem onClick={() => navigate("/profile")}>View Profile</MenuItem>
    //         <MenuItem>My Policy</MenuItem>
    //         <MenuItem onClick={logoutHandler}>Logout</MenuItem>
    //       </Menu>
    //     </nav>
    //   </header>
  );
};

function NewNavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (localStorage.getItem("role") != null) {
      setRole("" + localStorage.getItem("role"));
    }
    if (localStorage.getItem("jwt") != null) {
      setLoggedIn(true);
    }
  });
  const [open, setOpen] = useState(false);
  const [role, setRole] = useState("VIEW");
  const [loggedIn, setLoggedIn] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  function logoutHandler() {
    logout();
    setLoggedIn(false);
    setRole("VIEW");
    navigate("/login");
  }
  const selectedTabStyle = {
    color: "#880e4f",
    fontWeight: "bold",
  };
  const toggleNav = () => {
    setNavOpen(!navOpen);
  };
  const routeTo = (route: string) => {
    if (route == "/login") logoutHandler();
    setOpen(false);
    navigate(route);
  };
  return (
    <header>
      <nav className="nav-bar">
        <div className="nav-item logo">
          {" "}
          <img src={logo} alt="" />{" "}
        </div>
        <Link
          className="nav-item right-nav-section bigger-screen"
          style={location.pathname == "/" ? selectedTabStyle : {}}
          to="/"
        >
          Home
        </Link>
        {loggedIn ? (
          <Link
            style={
              location.pathname == "/manager-dashboard" ||
              location.pathname == "/userviewpolicy"
                ? selectedTabStyle
                : {}
            }
            className="nav-item bigger-screen"
            to={role == "ROLE_USER" ? "/userviewpolicy" : "/manager-dashboard"}
          >
            Dashboard
          </Link>
        ) : (
          ""
        )}

        <Link
          style={location.pathname == "/about" ? selectedTabStyle : {}}
          to="/about"
          className="nav-item bigger-screen"
        >
          About Us
        </Link>
        {loggedIn ? (
          <div className="nav-item user-avatar bigger-screen">
            <div className="user-name bigger-screen">
              {loggedIn ? localStorage.getItem("name") : ""}
            </div>
            {open ? (
              <div
                className="drop-down bigger-screen"
                style={{ minWidth: "250px" }}
              >
                <div
                  className="drop-down-item"
                  onClick={() => routeTo("profile")}
                >
                  View Profile
                </div>
                <div
                  className="drop-down-item"
                  onClick={() => routeTo("/login")}
                >
                  Logout
                </div>
              </div>
            ) : (
              ""
            )}
            <Avatar
              className="bigger-screen avatar-hidden"
              onClick={() => setOpen(!open)}
            />
          </div>
        ) : (
          ""
        )}

        <div
          className="nav-item right-nav-section smaller-screen"
          style={{ cursor: "pointer" }}
        >
          {navOpen ? (
            <CloseIcon onClick={toggleNav} />
          ) : (
            <MenuIcon onClick={toggleNav} />
          )}
        </div>
        {navOpen ? (
          <div className="smaller-screen drop-down">
            <div className="drop-down-item">
              <Link
                className="nav-item"
                style={location.pathname == "/" ? selectedTabStyle : {}}
                to="/"
              >
                HOME
              </Link>
            </div>
            {loggedIn ? (
              <div className="drop-down-item">
                <Link
                  style={
                    location.pathname == "/manager-dashboard" ||
                    location.pathname == "/userviewpolicy"
                      ? selectedTabStyle
                      : {}
                  }
                  className="nav-item"
                  to={
                    role == "ROLE_USER"
                      ? "/userviewpolicy"
                      : "/manager-dashboard"
                  }
                >
                  DASHBOARD
                </Link>
              </div>
            ) : (
              ""
            )}

            <div className="drop-down-item">
              <Link
                style={location.pathname == "/about" ? selectedTabStyle : {}}
                to="/about"
                className="nav-item"
              >
                ABOUT US
              </Link>
            </div>
            {loggedIn ? (
              <div
                className="drop-down-item"
                onClick={() => routeTo("profile")}
              >
                View Profile
              </div>
            ) : (
              ""
            )}
            {loggedIn ? (
              <div className="drop-down-item" onClick={() => routeTo("/login")}>
                Logout
              </div>
            ) : (
              ""
            )}
          </div>
        ) : (
          ""
        )}
      </nav>
    </header>
  );
}
export default NavBar;
