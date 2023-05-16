import { TextField } from "@mui/material";
import "../form.css";
export function RiskCoverage(props: { state: any; handleChange: any }) {
  return (
    <div className="form-fields">
      <TextField
        id="outlined-required"
        label="Angiography"
        type="text"
        onChange={props.handleChange("angiography")}
        defaultValue={props.state.angiography}
        value={props.state.angiography}
      />
      <TextField
        id="outlined-required"
        label="Bypass Surgery"
        type="text"
        onChange={props.handleChange("bypassSurgery")}
        defaultValue={props.state.bypassSurgery}
        value={props.state.bypassSurgery}
      />
      <TextField
        id="outlined-required"
        label="Cataract Surgery"
        type="text"
        onChange={props.handleChange("cataractSurgery")}
        defaultValue={props.state.cataractSurgery}
        value={props.state.cataractSurgery}
      />
      <TextField
        id="outlined-required"
        label="Covid Coverage"
        type="text"
        onChange={props.handleChange("covidCoverage")}
        defaultValue={props.state.covidCoverage}
        value={props.state.covidCoverage}
      />
      <TextField
        id="outlined-required"
        label="Hospitalization"
        type="text"
        onChange={props.handleChange("hospitalization")}
        defaultValue={props.state.hospitalization}
        value={props.state.hospitalization}
      />
    </div>
  );
}
