import "./styles.css";
import "../form.css";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";

export function PlanDetails(props: { state: any; handleChange: any }) {
  return (
    <div className="form-fields">
      <TextField
        id="outlined-required"
        label="Plan Name"
        type="text"
        onChange={props.handleChange("policyName")}
        defaultValue={props.state.policyName}
        value={props.state.policyName}
      />
      <TextField
        id="outlined-required"
        label="Room rent limit"
        type="text"
        onChange={props.handleChange("roomRentLimit")}
        defaultValue={props.state.roomRentLimit}
        value={props.state.roomRentLimit}
      />
      <TextField
        id="outlined-required"
        label="Coverage (in Lacs)"
        type="text"
        onChange={props.handleChange("coverage")}
        defaultValue={props.state.coverage}
        value={props.state.coverage}
      />
      <TextField
        id="outlined-required"
        label="Hospital Tier (1-5)"
        type="text"
        onChange={props.handleChange("hospitalTier")}
        defaultValue={props.state.hospitalTier}
        value={props.state.hospitalTier}
      />
      <FormControl>
        <FormLabel id="demo-controlled-radio-buttons-group">
          Diagonostic Test
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={props.state.diagnosticTest}
          onChange={props.handleChange("diagnosticTest")}
        >
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>
      </FormControl>
    </div>
  );
}
