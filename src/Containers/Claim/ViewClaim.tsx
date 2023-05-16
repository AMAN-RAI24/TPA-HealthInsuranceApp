import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { getClaimDetails } from "../../Utitlity/Services/UserViewPolicyService";
import Collapse from "@mui/material/Collapse";
import Constants from "../../Utitlity/Constants/Constants";

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

const ViewClaims = (props: {
  showClaims: any;
  setShowClaims: any;
  setButtonActive: any;
  setClaimButton: any;
}) => {
  const [claimDetails, setClaimDetails] = useState([
    {
      claimId: null,
      userName: null,
      patient: null,
      hospital: null,
      diseaseCategory: null,
      disease: null,
      claimAmount: null,
      createdAt: String,
      documentUrl: [],
    },
  ]);
  useEffect(() => {
    getClaimDetails(localStorage.getItem("jwt")).then((data) => {
      console.log(data.data);
      setClaimDetails(() => data.data);
    });
    console.log(claimDetails);
  }, []);

  const cancel = () => {
    props.setShowClaims((value: any) => !value);
    props.setButtonActive((value: any) => !value);
    props.setClaimButton((value: any) => !value);
  };
  return (
    <div className="editcontainer">
      {/* <Collapse in={true}> */}
      <h2>Viewing Claims</h2>
      <TableContainer component={Paper} style={{ marginTop: "50px" }}>
        <Table aria-label="customized table" className="custom-table">
          <TableHead>
            <TableRow>
              <StyledTableCell colSpan={6} style={{ textAlign: "center" }}>
                {" "}
                <b>Claim Details</b>{" "}
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                <b>Patient</b>
              </StyledTableCell>
              <StyledTableCell align="right">
                {" "}
                <b>Disease</b>{" "}
              </StyledTableCell>
              <StyledTableCell align="right">
                {" "}
                <b>Hospital</b>{" "}
              </StyledTableCell>
              <StyledTableCell align="right">
                {" "}
                <b>Claim Amount</b>{" "}
              </StyledTableCell>
              <StyledTableCell align="right">
                {" "}
                <b>Created Date</b>{" "}
              </StyledTableCell>
              <StyledTableCell align="right">
                {" "}
                <b>Documents</b>{" "}
              </StyledTableCell>
            </StyledTableRow>

            {claimDetails.map((d) => (
              <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                  {d.patient}
                </StyledTableCell>
                <StyledTableCell align="right">{d.disease}</StyledTableCell>
                <StyledTableCell align="right">{d.hospital}</StyledTableCell>
                <StyledTableCell align="right">{d.claimAmount}</StyledTableCell>
                <StyledTableCell align="right">
                  {d.createdAt.toString().slice(0, 10)}
                  {","}
                  {d.createdAt.toString().slice(11, 16)}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <a
                    href={Constants.API_URL + "getImage?id=" + d.documentUrl[0]}
                    target="_blank"
                  >
                    View
                  </a>
                </StyledTableCell>
                {/* <StyledTableCell align="right">{d.documentUrl.length}</StyledTableCell> */}

                {/* <StyledTableCell align="right"><a href={constants.API_URL + "getImage?id=" + d.imageUrl} target="_blank">View</a></StyledTableCell> */}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* </Collapse> */}
      <Collapse in={true} collapsedSize={40}>
        <input
          type="button"
          style={{ float: "right", margin: "10px" }}
          id="cancel"
          value="Close"
          onClick={cancel}
        ></input>
      </Collapse>
    </div>
  );
};
export default ViewClaims;
