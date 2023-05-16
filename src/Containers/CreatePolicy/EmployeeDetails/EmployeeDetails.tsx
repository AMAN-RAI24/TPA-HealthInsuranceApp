import { TextField } from "@mui/material";
import { useEffect } from "react";
import "./styles.css";
export function EmployeeDetails(props: { state: any; handleChange: any }) {
  return (
    <div>
      <p className="sub-section">Age Distribution</p>
      <div className="form-fields">
        <TextField
          id="outlined-required"
          label="18-25"
          type="text"
          onChange={props.handleChange("ageGroup1")}
          defaultValue={props.state.ageGroup1}
          value={props.state.ageGroup1}
        />
        <TextField
          id="outlined-required"
          label="25-35"
          type="text"
          onChange={props.handleChange("ageGroup2")}
          defaultValue={props.state.ageGroup2}
          value={props.state.ageGroup2}
        />
        <TextField
          id="outlined-required"
          label="35-60"
          type="text"
          onChange={props.handleChange("ageGroup3")}
          defaultValue={props.state.ageGroup3}
          value={props.state.ageGroup3}
        />
        <TextField
          id="outlined-required"
          label="60 and above"
          type="text"
          onChange={props.handleChange("ageGroup4")}
          defaultValue={props.state.ageGroup4}
          value={props.state.ageGroup4}
        />
      </div>
      <p className="sub-section">Gender Distribution</p>
      <div className="form-fields">
        <TextField
          id="outlined-required"
          label="Female"
          type="text"
          onChange={props.handleChange("females")}
          defaultValue={props.state.females}
          value={props.state.females}
        />
        <TextField
          id="outlined-required"
          label="Male"
          type="text"
          onChange={props.handleChange("males")}
          defaultValue={props.state.males}
          value={props.state.males}
        />
        <TextField
          id="outlined-required"
          label="Others"
          type="text"
          onChange={props.handleChange("others")}
          defaultValue={props.state.others}
          value={props.state.others}
        />
      </div>
    </div>
  );
}
