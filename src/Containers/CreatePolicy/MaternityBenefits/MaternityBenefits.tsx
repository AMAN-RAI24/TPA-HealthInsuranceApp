import { TextField } from "@mui/material";
import "../form.css";

export function MaternityBenefits(props: { state: any; handleChange: any }) {
  return (
    <div className="form-fields">
      <TextField
        id="outlined-required"
        label="C-Section Delivery"
        type="text"
        onChange={props.handleChange("cSectionDelivery")}
        defaultValue={props.state.cSectionDelivery}
        value={props.state.cSectionDelivery}
      />
      <TextField
        id="outlined-required"
        label="Normal Delivery"
        type="text"
        onChange={props.handleChange("normalDelivery")}
        defaultValue={props.state.normalDelivery}
        value={props.state.normalDelivery}
      />
    </div>
  );
}
