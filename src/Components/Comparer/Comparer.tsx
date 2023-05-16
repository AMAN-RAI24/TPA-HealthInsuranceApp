import React, { useEffect, useRef, useState } from "react";
import "./Comparer.css";
import axios from "axios";
import constants from "../../Utitlity/Constants/Constants";
import Rating from "@mui/material/Rating";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Box,
  styled,
  tableCellClasses,
} from "@mui/material";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import ClearIcon from "@mui/icons-material/Clear";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
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

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export const Comparer = (props: any) => {
  const ref = useRef(null);
  const [fuse, setFuse] = useState(false);
  const [fuseData, setFuseData] = useState({
    policyName: null,
    groupPolicyId: "",
    manager: { company: { companyName: null } },
    coverage: null,
    hospitalTier: null,
    roomRentLimit: null,
    familyDetails: { adults: null },
    maximumClaim: {
      angiography: null,
      bypassSurgery: null,
      cataractSurgery: null,
      covidCoverage: null,
      hospitalization: null,
    },
    maternityBenefits: { normalDelivery: null, csectionDelivery: null },
  });
  const [data, setData] = useState({
    policyName: [],
    type: [],
    creationDate: [],
    coverage: [],
    hospitalTier: [],
    roomRentLimit: [],
    diagnosticTest: [],
    angiography: [],
    bypassSurgery: [],
    cataractSurgery: [],
    covidCoverage: [],
    hospitalization: [],
    normalDelivery: [],
    csectionDelivery: [],
    adults: [],
    children: [],
  });
  // const toggle = (arg: boolean) => {
  //     if (arg){
  //         return false;
  //     }
  //     else{
  //         return true;
  //     }
  // }

  useEffect(() => {
    if (props.toggle1 === false && props.toggle2 === false) {
      axios
        .get(
          constants.API_URL +
          "dashboard/compare/" +
          props.plan1 +
          "/" +
          props.plan2,
          {
            headers: {
              Authorization: "" + localStorage.getItem("jwt"),
            },
          }
        )
        .then((resp: { data: any }) => {
          console.log(resp.data);
          setData(resp.data);
          setFuse(false);
        })
        .catch((error: any) => {
          console.log(error);
        });
    } else if (fuse === false) {
      axios
        .get(constants.API_URL + "get-policy/?id=" + props.plan1, {
          headers: {
            Authorization: "" + localStorage.getItem("jwt"),
          },
        })
        .then((resp: { data: any }) => {
          console.log(resp.data);
          setFuse(true);
          setFuseData(resp.data);
        })
        .catch((error: any) => {
          console.log(error);
        });
    }
  }, [props.toggle1, props.toggle2]);

  return (
    <>
      <div
        className={`${(props.toggle1 === true || props.toggle2 === true) &&
          props.toggle1 === props.toggle2
          ? "comparer-plan2"
          : ""
          }`}
        style={{
          width: "100%",
          alignItems: "center",
          margin: "auto",
          fontFamily: "sans-serif",
        }}
      >
        <h1 style={{ color: "grey" }}>COMPARE</h1>

        <table className="comparer-table" style={{ width: "100%" }}>
          <tr style={{ color: "black", fontSize: "1.3rem" }}>
            <th style={{ borderBottom: "1px solid" }}>Category</th>
            <th>Plans</th>
            <th
              className={`${props.toggle1 === false ? "" : "comparer-plan1"}`}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  // gap: "30px",
                  position: "relative",
                  // width: "300px",
                }}
              >
                {fuse === true ? fuseData.policyName : data.policyName[0]}
                <button
                  className="comparer-button"
                  onClick={(b) => {
                    props.setToggle1(true);
                    props.setPlan1("");
                  }}
                >
                  <ClearIcon />
                </button>
              </div>
            </th>
            <th
              className={`${(props.toggle1 === true || props.toggle2 === true) &&
                props.toggle1 != props.toggle2
                ? ""
                : "comparer-plan2"
                }`}
            >
              Add Another Plan To Compare
            </th>
            {/* <th className={`${(props.toggle1 === true || props.toggle2 === true) && props.toggle1 === props.toggle2 ? "" : "comparer-plan2"}`}>Add Plans To Compare</th> */}
            <th
              className={`${props.toggle2 === false ? "" : "comparer-plan2"}`}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                }}
              >
                {data.policyName[1]}
                <button
                  className="comparer-button"
                  onClick={(b) => {
                    props.setToggle2(true);
                  }}
                >
                  <ClearIcon className="remove-button" />
                </button>
              </div>
            </th>
            {/* <th className={`${props.toggle2 === true ? "" : "comparer-plan2"}`}>Add Second Plan To Compare</th> */}
          </tr>
          {/* <tr>
                        <th colSpan={3} style={{ textAlign: 'center' }}>Basic Details</th>
                   
                    </tr>
                     */}
          <tr style={{ borderBottom: "1px solid", borderTop: "1px solid" }}>
            <th
              rowSpan={4}
              style={{
                width: "300px",
                borderBottom: "1px solid",
                borderTop: "1px solid",
              }}
            >
              Basic Details
            </th>
          </tr>
          <tr>
            <th>Coverage</th>
            <td
              className={`${props.toggle1 === false ? "" : "comparer-plan1"}`}
            >
              <i className="fa fa-check">
                {fuse === true ? fuseData.coverage : data.coverage[0]} Lacs
              </i>
            </td>
            <td
              className={`${props.toggle2 === true || props.toggle1 === true
                ? ""
                : "comparer-plan2"
                }`}
              rowSpan={3}
            >
              No Data
            </td>
            <td
              className={`${props.toggle2 === false ? "" : "comparer-plan2"}`}
            >
              <i className="fa fa-check">{data.coverage[1]} Lacs</i>
            </td>
          </tr>
          <tr>
            <th>Hospital Tier</th>
            <td
              className={`${props.toggle1 === false ? "" : "comparer-plan1"}`}
            >
              <i className="fa fa-check">
                {/* {fuse === true ? fuseData.hospitalTier : data.hospitalTier[0]} */}
                {fuse === true ? (<Rating
                  name="read-only"
                  value={Number(fuseData.hospitalTier)}
                  readOnly />) : (<Rating
                    name="read-only"
                    value={Number(data.hospitalTier[0])}
                    readOnly />)}
              </i>
            </td>
            <td
              className={`${props.toggle2 === false ? "" : "comparer-plan2"}`}
            >
              {/* <i className="fa fa-check">{data.hospitalTier[1]}</i> */}
              <i className="fa fa-check"><Rating
                name="read-only"
                value={Number(data.hospitalTier[1])}
                readOnly
              /></i>
            </td>
          </tr>
          <tr>
            <th>Family</th>
            <td
              className={`${props.toggle1 === false ? "" : "comparer-plan1"}`}
            >
              <i className="fa fa-remove">
                {(fuse === true
                  ? fuseData.familyDetails.adults
                  : data.adults[0]) == null
                  ? "No"
                  : "Yes"}
              </i>
            </td>
            <td
              className={`${props.toggle2 === false ? "" : "comparer-plan2"}`}
            >
              <i className="fa fa-check">
                {data.adults[1] == null ? "No" : "Yes"}
              </i>
            </td>
          </tr>
          {/* <tr>
                        <th colSpan={3} style={{ textAlign: 'center' }}>Surgery/Injury Maximum Claims</th>
                    </tr> */}
          <tr style={{ borderBottom: "1px solid", borderTop: "1px solid" }}>
            <th
              rowSpan={6}
              style={{ borderBottom: "1px solid", borderTop: "1px solid" }}
            >
              Surgery/Injury Maximum Claims
            </th>
          </tr>
          <tr>
            <th>Bypass Surgery</th>
            <td
              className={`${props.toggle1 === false ? "" : "comparer-plan1"}`}
            >
              <i className="fa fa-check">
                {fuse === true
                  ? fuseData.maximumClaim.bypassSurgery
                  : data.bypassSurgery[0]} %
              </i>
            </td>
            <td
              className={`${props.toggle2 === true || props.toggle1 === true
                ? ""
                : "comparer-plan2"
                }`}
              rowSpan={5}
            >
              No Data
            </td>
            <td
              className={`${props.toggle2 === false ? "" : "comparer-plan2"}`}
            >
              <i className="fa fa-check">{data.bypassSurgery[1]} %</i>
            </td>
          </tr>
          <tr>
            <th>Cataract Surgery</th>
            <td
              className={`${props.toggle1 === false ? "" : "comparer-plan1"}`}
            >
              <i className="fa fa-check">
                {fuse === true
                  ? fuseData.maximumClaim.cataractSurgery
                  : data.cataractSurgery[0]} %
              </i>
            </td>
            <td
              className={`${props.toggle2 === false ? "" : "comparer-plan2"}`}
            >
              <i className="fa fa-check">{data.cataractSurgery[1]} %</i>
            </td>
          </tr>
          <tr>
            <th>Angiography</th>
            <td
              className={`${props.toggle1 === false ? "" : "comparer-plan1"}`}
            >
              <i className="fa fa-check">
                {fuse === true
                  ? fuseData.maximumClaim.angiography
                  : data.angiography[0]} %
              </i>
            </td>
            <td
              className={`${props.toggle2 === false ? "" : "comparer-plan2"}`}
            >
              <i className="fa fa-check">{data.angiography[1]} %</i>
            </td>
          </tr>
          <tr>
            <th>Covid </th>
            <td
              className={`${props.toggle1 === false ? "" : "comparer-plan1"}`}
            >
              <i className="fa fa-check">
                {fuse === true
                  ? fuseData.maximumClaim.covidCoverage
                  : data.covidCoverage[0]} %
              </i>
            </td>
            <td
              className={`${props.toggle2 === false ? "" : "comparer-plan2"}`}
            >
              <i className="fa fa-check">{data.covidCoverage[1]} %</i>
            </td>
          </tr>
          <tr>
            <th>Hospitalization </th>
            <td
              className={`${props.toggle1 === false ? "" : "comparer-plan1"}`}
            >
              <i className="fa fa-check">
                {fuse === true
                  ? fuseData.maximumClaim.hospitalization
                  : data.hospitalization[0]} %
              </i>
            </td>
            <td
              className={`${props.toggle2 === false ? "" : "comparer-plan2"}`}
            >
              <i className="fa fa-check">{data.hospitalization[1]} %</i>
            </td>
          </tr>
          {/* <tr>
                        <th colSpan={3} style={{ textAlign: 'center' }}>Maternity Benefits</th>
                    </tr> */}
          <tr style={{ borderBottom: "1px solid", borderTop: "1px solid" }}>
            <th rowSpan={3}>Maternity Benefits</th>
          </tr>
          <tr>
            <th>C-Section Delivery </th>
            <td
              className={`${props.toggle1 === false ? "" : "comparer-plan1"}`}
            >
              <i className="fa fa-check">
                {fuse === true
                  ? fuseData.maternityBenefits.csectionDelivery
                  : data.csectionDelivery[0]} %
              </i>
            </td>
            <td
              className={`${props.toggle2 === true || props.toggle1 === true
                ? ""
                : "comparer-plan2"
                }`}
              rowSpan={2}
            >
              No Data
            </td>
            <td
              className={`${props.toggle2 === false ? "" : "comparer-plan2"}`}
            >
              <i className="fa fa-check">{data.csectionDelivery[1]} %</i>
            </td>
          </tr>
          <tr>
            <th>Normal Delivery </th>
            <td
              className={`${props.toggle1 === false ? "" : "comparer-plan1"}`}
            >
              <i className="fa fa-check">
                {fuse === true
                  ? fuseData.maternityBenefits.normalDelivery
                  : data.normalDelivery[0]} %
              </i>
            </td>
            <td
              className={`${props.toggle2 === false ? "" : "comparer-plan2"}`}
            >
              <i className="fa fa-check">{data.normalDelivery[1]} %</i>
            </td>
          </tr>
        </table>

        {/* NEW TABLE MUI element */}
        {/* <Box sx={{ margin: "20px 0" }}>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell><b>Plans</b></StyledTableCell>
                                    <StyledTableCell align="right"><b>Plan 1</b></StyledTableCell>
                                    <StyledTableCell align="right"><b>Plan 2</b></StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <StyledTableRow key={row.name}>
                                        <StyledTableCell component="th" scope="row">
                                            {row.name}
                                        </StyledTableCell>
                                        <StyledTableCell align="right">{row.calories}</StyledTableCell>
                                        <StyledTableCell align="right">{row.fat}</StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box> */}
      </div>
    </>
  );
};
