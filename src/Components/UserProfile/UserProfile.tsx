import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import constants from "../../Utitlity/Constants/Constants";
import { Loading } from "../../Components/Loading/loading";

// importing css
import "./UserProfile.css";
//Importing image
import profile from "../../Assets/Images/profile/profile.jpeg";
import { Alert, Card, CardContent } from "@mui/material";
import { grey } from "@mui/material/colors";

// MUI code starts
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#ccc3c3",
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

// function createData(
//     name: string,
//     calories: number,
//     fat: number,
//     carbs: number,
//     protein: number,
// ) {
//     return { name, calories, fat, carbs, protein };
// }

// const rows = [
//     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//     createData('Eclair', 262, 16.0, 24, 6.0),
//     createData('Cupcake', 305, 3.7, 67, 4.3),
//     createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];
// MUI Code Ends

const UserProfile = () => {
  const [data, setData] = useState({
    planDetails: { policyName: null, coverage: 0, topUp: 0, date: String },
    familyDetails: [
      {
        userFamilyDetailsId: null,
        name: null,
        relation: null,
        age: null,
        phoneNumber: null,
        imageUrl: null,
      },
    ],
    userDetails: {
      dob: String,
      mobileNumber: null,
      name: null,
      employeeId: null,
      company: null,
    },
    status: 0,
    message: null,
    previousPlans: [
      {
        status: "",
        policyName: null,
        type: null,
        creationDate: 0,
        coverage: null,
        groupPolicyId: null,
      },
    ],
  });
  const [isLoading, setIsLoading] = useState(true);
  const [insurance, setInsurance] = useState<any>([
    {
      status: "",
      policyName: null,
      type: null,
      creationDate: 0,
      coverage: null,
      groupPolicyId: null,
    },
  ]);
  const navigate = useNavigate();
  useEffect(() => {
    if ("" + localStorage.getItem("role") == "ROLE_INSURANCE") {
      setIsLoading(true);
      axios
        .get(constants.API_URL + "insurance-profile/", {
          headers: {
            Authorization: "" + localStorage.getItem("jwt"),
          },
        })
        .then((resp) => {
          console.log(resp);
          setInsurance(resp.data);
          setIsLoading(false);
        });
    }
    axios
      .get(constants.API_URL + "profile/", {
        headers: {
          Authorization: "" + localStorage.getItem("jwt"),
        },
      })
      .then((resp: { data: any }) => {
        console.log(resp.data);

        setData(resp.data);
        // setTimeout(() => {
        setIsLoading(false);
        // }, 1000);
      })
      .catch((error: any) => {
        if (error.response.status === 404) {
          setData(error.response.data);
          // setTimeout(() => {
          setIsLoading(false);
          // }, 1000);
        }
        console.log(error);
      });
  }, []);

  return (
    <div style={{ paddingBottom: "8%" }}>
      {isLoading ? (
        <div
          style={{
            width: "100%",
            height: "100px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "17%",
          }}
        >
          <Loading />
        </div>
      ) : data.status === 404 &&
        "" + localStorage.getItem("role") != "ROLE_INSURANCE" ? (
        <Alert variant="filled" severity="error">
          {data.message}
        </Alert>
      ) : "" + localStorage.getItem("role") == "ROLE_INSURANCE" ? (
        <>
          <Box sx={{ width: "100%", height: 75, padding: "0 3%" }}>
            <div>
              <p className="profile-heading">Accepted Plans</p>
            </div>
          </Box>
          <div style={{ margin: "2% 4%" }}>
            <TableContainer component={Paper} style={{ marginTop: "50px" }}>
              <Table aria-label="customized table" className="custom-table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell
                      colSpan={5}
                      style={{
                        textAlign: "center",
                      }}
                    >
                      {" "}
                      <b>Accepted Plans</b>{" "}
                    </StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <StyledTableRow>
                    <StyledTableCell component="th" scope="row">
                      <b>Policy Name</b>
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {" "}
                      <b>Status</b>{" "}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {" "}
                      <b>Coverage(in Lacs)</b>{" "}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {" "}
                      <b>Created At</b>{" "}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {" "}
                      <b>Detailed View</b>{" "}
                    </StyledTableCell>
                  </StyledTableRow>

                  {insurance.map((d: any) => (
                    <StyledTableRow>
                      <StyledTableCell component="th" scope="row">
                        {d.policyName}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {d.status}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {d.coverage}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {d.creationDate.split("T")[0] +
                          " , " +
                          d.creationDate.split("T")[1].slice(0, 5)}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        <button
                          className="profile-button"
                          onClick={() => {
                            // navigate("/view-policy/" + d.groupPolicyId);
                            window.open(
                              "/view-policy/" + Number(d.id).toString(),
                              "_blank"
                            );
                          }}
                        >
                          View
                        </button>
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </>
      ) : (
        <>
          <Box sx={{ width: "100%" }}>
            <Box sx={{ width: "100%", height: 75, padding: "0 3%" }}>
              <div>
                <p className="profile-heading">User Details</p>
              </div>
            </Box>

            <Card
              sx={{
                borderRadius: "20px",
                width: "600px",
                maxWidth: "95%",
                boxShadow: "0 0 15px rgba(0,0,0,0.3)",
                margin: "2% 4%",
                backgroundImage:
                  "linear-gradient(to bottom right, #ff95e4, #ffd5c8)",
              }}
            >
              <CardContent
                sx={{ display: "flex", justifyContent: "space-evenly" }}
              >
                <Box>
                  <img
                    src={profile}
                    style={{
                      width: "210px",
                      height: "210px",
                      objectFit: "cover",
                      borderRadius: "50%",
                      backgroundRepeat: "no-repeat",
                      padding: "15%",
                      margin: "18px",
                    }}
                    alt=""
                  />
                </Box>
                {/* <Box sx={{ margin: "18px" }}><div className="spacing-data"><b>Employee Id : </b>{data.userDetails.employeeId}</div>
                                        <div className="spacing-data"><b>Name : </b>{data.userDetails.name}</div>
                                        <div className="spacing-data"><b>DOB : </b>{data.userDetails.dob.toString().slice(0, 10)}</div>
                                        <div className="spacing-data"><b>Company : </b>{data.userDetails.company}</div>
                                        <div className="spacing-data"><b>Phone No. : </b>{data.userDetails.mobileNumber}</div>
                                    </Box> */}
                <Box
                  sx={{
                    width: "600px",
                    maxWidth: "100%",
                    display: "flex",
                    margin: "60px 18px 18px 18px",
                    justifyContent: "space-between",
                    gap: "0px",
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
                    <Box>
                      <b>Name</b>
                    </Box>
                    <Box>
                      <b>DOB</b>
                    </Box>
                    <Box>
                      <b>Company</b>
                    </Box>
                    <Box>
                      <b>Contact</b>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      flex: "1",
                      rowGap: "8px",
                      width: "100%",
                    }}
                  >
                    <Box>: {data.userDetails.name}</Box>
                    <Box>: {data.userDetails.dob.toString().slice(0, 10)}</Box>
                    <Box>: {data.userDetails.company}</Box>
                    <Box>: {data.userDetails.mobileNumber}</Box>
                  </Box>
                </Box>
              </CardContent>
            </Card>

            {/* <div className="flex-row profile-container">

                                <div style={{ marginRight: "3%" }}><img src={profile} style={{ width: '110%', height: "210px", objectFit: "cover", borderRadius: "49%", backgroundRepeat: "no-repeat" }} alt="" /></div>
                                <div className="flex-column profile-sub-container">
                                    <div className="spacing-data">Employee Id : {data.userDetails.employeeId}</div>
                                    <div className="spacing-data">Name : {data.userDetails.name}</div>
                                    <div className="spacing-data">DOB : {data.userDetails.dob.toString().slice(0, 10)}</div>
                                    <div className="spacing-data">Company : {data.userDetails.company}</div>
                                    <div className="spacing-data">Phone No. : {data.userDetails.mobileNumber}</div>
                                </div>
                            </div> */}

            <Box sx={{ width: "100%", height: 75, padding: "0 3%" }}>
              <div>
                <p className="profile-heading">Current Plans</p>
              </div>
            </Box>

            <div style={{ margin: "2% 4%" }}>
              <TableContainer component={Paper}>
                <Table
                  aria-label="customized table"
                  className="custom-table"
                  style={{ margin: "0" }}
                >
                  <TableHead>
                    <TableRow>
                      {/* <StyledTableCell colSpan={2} style={{ textAlign: "center" }}><b>{data.planDetails.policyName}</b></StyledTableCell> */}
                      <StyledTableCell
                        colSpan={5}
                        style={{ textAlign: "center" }}
                      >
                        <b>Policy Details</b>
                      </StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <StyledTableRow>
                      <StyledTableCell component="th" scope="row">
                        <b>Name</b>
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        <b>Year</b>
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        <b>Coverage(in Lacs)</b>
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        <b>Extra Coverage(in Lacs)</b>
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        <b>Full Coverage(in Lacs)</b>
                      </StyledTableCell>
                    </StyledTableRow>

                    <StyledTableRow>
                      <StyledTableCell component="th" scope="row">
                        {data.planDetails.policyName}
                      </StyledTableCell>

                      <StyledTableCell align="right">
                        {data.planDetails.date.toString().slice(0, 4)} -{" "}
                        {1 +
                          Number(data.planDetails.date.toString().slice(0, 4))}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {data.planDetails.coverage}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {data.planDetails.topUp}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {data.planDetails.topUp + data.planDetails.coverage}
                      </StyledTableCell>
                    </StyledTableRow>
                  </TableBody>
                </Table>
              </TableContainer>
              {data.familyDetails.length === 0 ? (
                <></>
              ) : (
                <TableContainer component={Paper} style={{ marginTop: "50px" }}>
                  <Table aria-label="customized table" className="custom-table">
                    <TableHead>
                      <TableRow>
                        <StyledTableCell
                          colSpan={5}
                          style={{ textAlign: "center" }}
                        >
                          {" "}
                          <b>Insured Family Members</b>{" "}
                        </StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <StyledTableRow>
                        <StyledTableCell component="th" scope="row">
                          <b>Name</b>
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {" "}
                          <b>Relation</b>{" "}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {" "}
                          <b>Age</b>{" "}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {" "}
                          <b>ID Proof</b>{" "}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {" "}
                          <b>Document</b>{" "}
                        </StyledTableCell>
                      </StyledTableRow>

                      {data.familyDetails.map((d) => (
                        <StyledTableRow>
                          <StyledTableCell component="th" scope="row">
                            {d.name}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {d.relation}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {d.age}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {d.phoneNumber}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            <a
                              href={
                                constants.API_URL + "getImage?id=" + d.imageUrl
                              }
                              target="_blank"
                            >
                              View
                            </a>
                          </StyledTableCell>
                        </StyledTableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              )}
            </div>

            {data["previousPlans"] === undefined ? (
              <></>
            ) : (
              <>
                <Box sx={{ width: "100%", height: 75, padding: "0 3%" }}>
                  <div>
                    <p className="profile-heading">Previous Plans</p>
                  </div>
                </Box>
                <div style={{ margin: "2% 4%" }}>
                  <TableContainer
                    component={Paper}
                    style={{ marginTop: "50px" }}
                  >
                    <Table
                      aria-label="customized table"
                      className="custom-table"
                    >
                      <TableHead>
                        <TableRow>
                          <StyledTableCell
                            colSpan={5}
                            style={{
                              textAlign: "center",
                            }}
                          >
                            {" "}
                            <b>Previous Plans</b>{" "}
                          </StyledTableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <StyledTableRow>
                          <StyledTableCell component="th" scope="row">
                            <b>Policy Name</b>
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {" "}
                            <b>Status</b>{" "}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {" "}
                            <b>Coverage(in Lacs)</b>{" "}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {" "}
                            <b>Created At</b>{" "}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {" "}
                            <b>Detailed View</b>{" "}
                          </StyledTableCell>
                        </StyledTableRow>

                        {data.previousPlans.map((d) => (
                          <StyledTableRow>
                            <StyledTableCell component="th" scope="row">
                              {d.policyName}
                            </StyledTableCell>
                            <StyledTableCell align="right">
                              {d.status}
                            </StyledTableCell>
                            <StyledTableCell align="right">
                              {d.coverage}
                            </StyledTableCell>
                            <StyledTableCell align="right">
                              {new Intl.DateTimeFormat("en-US", {
                                year: "numeric",
                                month: "2-digit",
                                day: "2-digit",
                                hour: "2-digit",
                                minute: "2-digit",
                              }).format(d.creationDate)}
                            </StyledTableCell>
                            <StyledTableCell align="right">
                              <button
                                className="profile-button"
                                onClick={() => {
                                  // navigate("/view-policy/" + d.groupPolicyId);
                                  window.open(
                                    "/view-policy/" + d.groupPolicyId,
                                    "_blank"
                                  );
                                }}
                              >
                                View
                              </button>
                            </StyledTableCell>
                          </StyledTableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </div>
              </>
            )}
          </Box>
        </>
      )}
    </div>
  );
};

export default UserProfile;
