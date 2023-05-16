import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import AdminActions from "../../Components/AdminActionsBar/AdminActions";
import "./styles.css";
import { addRole } from "../../Utitlity/Services/adminApiCalls";
import { role } from "../../Utitlity/Models/models";
export function Roles() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = handleSubmit((data) => {
    const role: role = {
      role: data.role.toUpperCase(),
    };
    addRole(role).then((resp: any) => {
      console.log(resp);
    });
    reset();
  });
  return (
    <div>
      <AdminActions />
      <div className="roles-form-container">
        <h2>Add a role</h2>
        <form onSubmit={onSubmit}>
          <div className="form-row">
            <TextField
              id="outlined-required"
              label="Role"
              type="text"
              {...register("role", {
                required: true,
              })}
            />
          </div>
          {errors.role ? <p className="form-error">Enter a Role</p> : ""}
          <div className="form-row">
            <button className="btn btn-large">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
