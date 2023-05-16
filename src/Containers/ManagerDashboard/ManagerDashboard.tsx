import { Alert, AlertTitle, Box, Button, Container } from "@mui/material";
import "./managerdashboard.scss";
import React, { useEffect, useRef, useState } from "react";
import { Comparer } from "../../Components/Comparer/Comparer";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import constants from "../../Utitlity/Constants/Constants";
import { Loading } from "../../Components/Loading/loading";

import Grow from "@mui/material/Grow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const ManagerDashboard = () => {
  // API Intigration code starts
  const [policy, setPolicy] = useState([
    {
      groupPolicyId: "",
      manager: { company: { companyName: null } },
      coverage: null,
      hospitalTier: null,
      roomRentLimit: null,
      familyDetails: null,
      policyName: null,
    },
  ]);
  const [latest, setLatest] = useState({
    groupPolicyId: "",
    manager: { company: { companyName: null } },
    coverage: null,
    hospitalTier: null,
    roomRentLimit: null,
    familyDetails: null,
    policyName: null,
    status: null,
    creationDate: String,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [plan1, setPlan1] = useState("");
  const [plan2, setPlan2] = useState("");
  const [toggle1, setToggle1] = useState(true);
  const [toggle2, setToggle2] = useState(true);
  const initialState = "Add To Comparer";
  const [success, setSuccess] = useState(false);
  const [warning, setWarning] = useState(false);
  const [error, setError] = useState(false);
  const ref = useRef(null);

  const [checked, setChecked] = useState(true);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  useEffect(() => {
    axios
      .get(constants.API_URL + "dashboard/?pageSize=100", {
        headers: {
          Authorization: "" + localStorage.getItem("jwt"),
        },
      })
      .then((resp: { data: any }) => {
        console.log(resp.data);
        setPolicy(resp.data);
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      })
      .catch((error: any) => {
        console.log(error);
      });
    if (localStorage.getItem("role") == "ROLE_MANAGER") {
      axios
        .get(constants.API_URL + "dashboard/latest", {
          headers: {
            Authorization: "" + localStorage.getItem("jwt"),
          },
        })
        .then((resp: { data: any }) => {
          console.log(resp.data);
          setLatest(resp.data);
          // setTimeout(() => {
          setIsLoading(false);
          // }, 1000);
        })
        .catch((error: any) => {
          console.log(error);
        });
    }
  }, []);

  // API Intigration code ends

  const navigate = useNavigate();
  function createPolicyClicked() {
    navigate("/create-policy");
  }
  return (
    <>
      <Box
        sx={{
          display: "flex",
          "flex-direction": "column",
          marginLeft: "80px",
          marginRight: "80px",
          marginTop: "20px",
          borderRadius: "20px",
        }}
      >
        <Alert
          severity="success"
          style={success == false ? { display: "none" } : { display: "" }}
          color="success"
        >
          Added To Compare
        </Alert>
        <Alert
          severity="warning"
          style={warning == false ? { display: "none" } : { display: "" }}
        >
          <AlertTitle>Comparer is FULL!!!</AlertTitle>Try to remove Plans from
          Comparer.
        </Alert>
        <Alert
          severity="warning"
          style={error == false ? { display: "none" } : { display: "" }}
        >
          Plan has already been added to compare.
        </Alert>

        {/* recently added section */}

        {/* all plans Code */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            "padding-bottom": "20px",
            "padding-top": "40px",
            "padding-left": "55px",
          }}
        >
          <Box
            sx={{
              fontFamily: "sans-serif",
              "font-weight": "bold",
              "font-size": "2em",
            }}
          >
            Plans
          </Box>
          <Box
            sx={{
              border: "1px solid blue",
              borderRadius: "5px",
              "&:hover": {
                color: "white",
                transition: "0.3s ease-in-out",
                transform: "scale(1.15)",
              },
            }}
          >
            <Button
              sx={{ fontWeight: "bold" }}
              variant="outlined"
              onClick={createPolicyClicked}
            >
              Create Policy
            </Button>
          </Box>
        </Box>
        <Box className="manager-dash">
          <div className="list-items">
            {isLoading ? (
              <div
                style={{
                  width: "100%",
                  height: "100px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Loading />
              </div>
            ) : (
              policy.map((obj, id) => (
                <div
                  className="card-category-1"
                  style={{
                    width: "490px",
                    maxWidth: "100%",
                    margin: "15px 30px",
                  }}
                >
                  <Grow in={true} {...{ timeout: 1000 }}>
                    <div className="basic-card basic-card-aqua">
                      <div className="card-content">
                        {id === 0 ? (
                          <div className="ribbon ribbon-bottom-left">
                            <span>Recently added</span>
                          </div>
                        ) : (
                          <div></div>
                        )}
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <span className="card-title">
                            {obj.manager.company === null
                              ? "Insure Corp Base Plan"
                              : obj.manager.company.companyName}
                          </span>
                          <InfoOutlinedIcon
                            sx={{
                              color: "white",
                              cursor: "pointer",
                              fontSize: "30px",
                              "&:hover": {
                                color: "white",
                                transition: "0.3s ease-in-out",
                                transform: "scale(1.3)",
                              },
                            }}
                            onClick={() => {
                              navigate("/view-policy/" + obj.groupPolicyId);
                            }}
                          />
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            "margin-left": "50px",
                            marginTop: "10px",
                          }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              flex: "1",
                              rowGap: "8px",
                            }}
                          >
                            <Box>Policy Name</Box>
                            <Box>Coverage</Box>
                            <Box>Hospital Tier</Box>
                            <Box>Room rent limit</Box>
                            <Box>Family</Box>
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              flex: "1",
                              rowGap: "8px",
                            }}
                          >
                            <Box>: {obj.policyName}</Box>
                            <Box>: {obj.coverage} Lacs</Box>
                            <Box>: {obj.hospitalTier} star</Box>
                            <Box>: {obj.roomRentLimit}</Box>
                            <Box>
                              : {obj.familyDetails === null ? "No" : "Yes"}
                            </Box>
                          </Box>
                        </Box>
                      </div>
                      <Box
                        sx={{
                          display: "flex",
                          "justify-content": "flex-end",
                          "padding-left": "30px",
                          "padding-right": "30px",
                        }}
                      >
                        <Button
                          variant="outlined"
                          sx={{
                            // border: "1px solid violet",
                            paddingLeft: "15px",
                            paddingRight: "15px",
                            // background: "#ff6200",
                            background: "white",
                            color: "black",
                            borderRadius: "20px",
                            "&:hover": {
                              backgroundColor: "white",
                              color: "black",
                              transition: "0.3s ease-in-out",
                              transform: "scale(1.1)",
                            },
                          }}
                          ref={ref}
                          id={obj.groupPolicyId}
                          onClick={(btn) => {
                            if (toggle1 === true) {
                              if (btn.currentTarget.id === plan2) {
                                setError(true);
                                setTimeout(() => setError(false), 1500);
                              } else {
                                setPlan1(btn.currentTarget.id);
                                setToggle1(false);
                                console.log(btn.currentTarget.id);
                                setSuccess(true);
                                setTimeout(() => setSuccess(false), 1500);
                              }
                              // changeButtonText("Added to comparer",btn.currentTarget.id)
                            } else if (toggle2 == true) {
                              if (plan1 === btn.currentTarget.id) {
                                setError(true);
                                setTimeout(() => setError(false), 1500);
                              } else {
                                setPlan2(btn.currentTarget.id);
                                setToggle2(false);
                                console.log(btn.currentTarget.id);
                                setSuccess(true);
                                setTimeout(() => setSuccess(false), 1500);
                              }
                              // changeText("Added to Comparer")
                              // changeButtonText("Added to comparer",btn.currentTarget.id)
                            } else {
                              setWarning(true);
                              setTimeout(() => setWarning(false), 1500);
                            }
                          }}
                        >
                          {/* {buttonText} */}
                          Add to compare
                        </Button>
                        {/* <Button
                          variant="outlined"
                          sx={{
                            color: "green",
                            background: "white",
                            border: "1px solid blue",
                          }}
                          onClick={() => {
                            navigate("/view-policy/" + obj.groupPolicyId);
                          }}
                        >
                          View
                        </Button> */}
                      </Box>
                    </div>
                  </Grow>
                </div>
              ))
            )}
          </div>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          padding: "110px",
          margin: "auto",
          display: "flex",
          "flex-direction": "column",
          "margin-top": "30px",
          paddingBottom: "30px",
          // "background-color": "rgb(241, 247, 241)",
          borderRadius: "20px",
        }}
        style={
          (toggle1 === true || toggle2 === true) && toggle1 === toggle2
            ? { display: "none" }
            : { display: "flex" }
        }
      >
        <Comparer
          plan1={plan1}
          setPlan1={setPlan1}
          plan2={plan2}
          setPlan2={setPlan2}
          toggle1={toggle1}
          setToggle1={setToggle1}
          toggle2={toggle2}
          setToggle2={setToggle2}
        />
      </Box>
    </>
  );
};

export default ManagerDashboard;
