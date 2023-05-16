import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import meditation from "../../../Assets/Images/meditation.svg";

export function Banner() {
  useEffect(() => {
    if (localStorage.getItem("jwt") != null) {
      setLoggedIn(true);
      setRole("" + localStorage.getItem("role"));
    }
  });

  const [loggedIn, setLoggedIn] = useState(false);
  const [role, setRole] = useState("VIEW");
  const navigate = useNavigate();
  function routeTo(route: string) {
    navigate("/" + route);
  }
  return (
    <div className="banner">
      <div className="info-section">
        <h1>
          Insurance To Protect You <br /> And Your Family.
        </h1>
        <p>
          {role == "ROLE_MANAGER"
            ? "This is a TPA Webpage where Corporates can design a group Insurance suitable for their needs."
            : "Insure Corp helps you to cover your family under the protection of the Insurance !"}
        </p>
        {loggedIn ? (
          <p style={{ fontWeight: "bold" }}>
            Hey {localStorage.getItem("name")} ! Welcome to Insure-corp
          </p>
        ) : (
          <div
            className="buttons"
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button variant="outlined" onClick={() => routeTo("signup")}>
              Sign Up
            </Button>
            <Button variant="outlined" onClick={() => routeTo("login")}>
              Log In
            </Button>
          </div>
        )}
      </div>
      <div className="display-section">
        <img className="meditate" src={meditation} alt="" />
      </div>
    </div>
  );
}
