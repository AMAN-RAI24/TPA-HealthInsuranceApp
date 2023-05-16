import {
  FormControl,
  InputLabel,
  OutlinedInput,
  TextareaAutosize,
} from "@mui/material";

import * as React from "react";

import InputAdornment from "@mui/material/InputAdornment";
import { useParams } from "react-router-dom";
import { placeBid } from "../../Utitlity/Services/policy";
import { ChangeEvent } from "react";
interface State {
  amount: string;
  message: string;
}
export function MakeOffer(props: any) {
  const [values, setValues] = React.useState<State>({
    amount: "",
    message: "",
  });
  const handleChange =
    (prop: keyof State) =>
    (
      event:
        | React.ChangeEvent<HTMLInputElement>
        | ChangeEvent<HTMLTextAreaElement>
    ) => {
      setValues({ ...values, [prop]: event.target.value });
    };
  const { id } = useParams();

  const makeOffer = () => {
    const data = {
      amount: values.amount,
      message: values.message,
      groupPolicyId: id,
    };
    placeBid("" + localStorage.getItem("jwt"), data).then((resp) => {
      console.log(resp);
      window.location.reload();
    });
  };
  return (
    <div className="make-offer" style={{ marginTop: "50px" }}>
      <h2>Make an Offer!!</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(id);
          makeOffer();
          window.location.reload();
        }}
      >
        <FormControl fullWidth style={{ marginBottom: "10px" }}>
          <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            value={values.amount}
            onChange={handleChange("amount")}
            startAdornment={<InputAdornment position="start">₹</InputAdornment>}
            label="Amount"
          />
        </FormControl>
        <TextareaAutosize
          aria-label="minimum height"
          minRows={3}
          value={values.message}
          onChange={handleChange("message")}
          placeholder="Enter the details of the offer here"
          style={{ width: "100%", maxWidth: "100%", marginBottom: "10px" }}
        />
        <button className="btn btn-large">Submit</button>
      </form>
    </div>
  );
}
