import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import AdminActions from "../../Components/AdminActionsBar/AdminActions";
import { company } from "../../Utitlity/Models/models";
import { addCompany } from "../../Utitlity/Services/adminApiCalls";
import "./styles.css";

export function Companies() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = handleSubmit((data) => {
    const company: company = {
      companyName: data.companyName.toUpperCase(),
      address: data.address,
      contactInformation: data.contactInformation,
    };
    addCompany(company).then((resp) => {
      console.log(resp);
    });
    reset();
  });

  return (
    <div>
      <AdminActions />
      <div className="companies-form-container">
        <h2>Add a Company</h2>
        <form onSubmit={onSubmit}>
          <div className="form-row">
            <TextField
              id="outlined-required"
              label="Company Name"
              type="text"
              {...register("companyName", {
                required: true,
              })}
            />
          </div>
          {errors.companyName ? (
            <p className="form-error">Company Name is needed</p>
          ) : (
            ""
          )}
          <div className="form-row">
            <TextField
              id="outlined-required"
              label="Address"
              type="text"
              {...register("address", {
                required: true,
              })}
            />
          </div>
          {errors.address ? (
            <p className="form-error">Company Address is needed</p>
          ) : (
            ""
          )}
          <div className="form-row">
            <TextField
              id="outlined-required"
              label="Contact Information"
              type="text"
              {...register("contactInformation", {
                required: true,
              })}
            />
          </div>
          {errors.contactInformation ? (
            <p className="form-error">Contact info is needed</p>
          ) : (
            ""
          )}
          <div className="form-row">
            <button className="btn btn-large">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
