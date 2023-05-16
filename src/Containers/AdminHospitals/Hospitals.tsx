import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import AdminActions from "../../Components/AdminActionsBar/AdminActions";
import { hospital } from "../../Utitlity/Models/models";
import { addHospital } from "../../Utitlity/Services/adminApiCalls";
import "./styles.css";

export function Hospitals() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = handleSubmit((data) => {
    const hospital: hospital = {
      contactInformation: data.contactInformation,
      location: data.location,
      hospitalName: data.hospitalName,
      tier: data.tier,
    };
    addHospital(hospital).then((resp) => {
      console.log(resp);
    });
    reset();
  });
  return (
    <div>
      <AdminActions />
      <div className="companies-form-container">
        <h2>Add a Hospital</h2>
        <form onSubmit={onSubmit}>
          <div className="form-row">
            <TextField
              id="outlined-required"
              label="Hospital Name"
              type="text"
              {...register("hospitalName", {
                required: true,
              })}
            />
          </div>
          {errors.hospitalName ? (
            <p className="form-error">Hospital Name is needed</p>
          ) : (
            ""
          )}
          <div className="form-row">
            <TextField
              id="outlined-required"
              label="Tier"
              type="text"
              {...register("tier", {
                required: true,
              })}
            />
          </div>
          {errors.tier ? (
            <p className="form-error">Hospital tier is needed</p>
          ) : (
            ""
          )}
          <div className="form-row">
            <TextField
              id="outlined-required"
              label="Location"
              type="text"
              {...register("location", {
                required: true,
              })}
            />
          </div>
          {errors.location ? (
            <p className="form-error">Location is needed</p>
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
