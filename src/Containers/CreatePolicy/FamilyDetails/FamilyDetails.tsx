import { TextField } from "@mui/material";

export function FamilyDetails(props: { state: any; handleChange: any }) {
  return (
    <div className="form-fields">
      <TextField
        id="outlined-required"
        label="Adults"
        type="text"
        onChange={props.handleChange("adults")}
        defaultValue={props.state.adults}
        value={props.state.adults}
      />
      <TextField
        id="outlined-required"
        label="Children"
        type="text"
        onChange={props.handleChange("children")}
        defaultValue={props.state.children}
        value={props.state.children}
      />
    </div>
  );
}
