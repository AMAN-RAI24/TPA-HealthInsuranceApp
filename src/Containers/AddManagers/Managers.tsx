import { Button, IconButton, TextField } from "@mui/material";
import React, { ChangeEventHandler, SetStateAction, useState } from "react";
import { useForm } from "react-hook-form";
import AdminActions from "../../Components/AdminActionsBar/AdminActions";
import "./styles.css";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { addInsuranceCompany } from "../../Utitlity/Services/adminApiCalls";
import { insuranceCompany, user } from "../../Utitlity/Models/models";
import { addUser, getRole } from "../../Utitlity/Services/userApiCalls";
export function Managers() {
  const [showPassword, setShowPassword] = useState(false);
  const [file, setFile] = useState<File | any>();
  const formData = new FormData();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = handleSubmit((data) => {
    console.log(data);
    console.log("udsb");
    const insuranceCompany: insuranceCompany = {
      name: data.name,
      address: data.address,
      representative: data.representative,
      phoneNumber: data.phoneNumber,
    };
    getRole("ROLE_INSURANCE").then((resp) => {
      const role = resp;
      const user = {
        employeeId: "NA",
        email: data.email,
        name: data.name,
        mobileNumber: data.phoneNumber,
        date: new Date(),
        password: data.password,
        company: null,
        role: role[0],
      };
      addUser(user).then((resp) => {
        console.log(resp);
      });
    });
    formData.append("insuranceCompanyString", JSON.stringify(insuranceCompany));
    formData.append("file", file);

    addInsuranceCompany("" + localStorage.getItem("jwt"), formData)
      .then((resp) => {
        console.log(resp);
      })
      .catch((error) => {
        console.log(error);
      });
    // reset();
  });
  const hiddenFileInput: any = React.useRef(null);

  const handleClick = (event: any) => {
    hiddenFileInput.current.click();
  };
  const handleChange = (event: any) => {
    const fileUploaded = event.target.files[0];
    console.log(fileUploaded);
    setFile(fileUploaded);
  };
  function handleClickShowPassword() {
    setShowPassword((value) => !value);
  }
  return (
    <div>
      <AdminActions />
      <div className="managers-form-container">
        <h2>Add an Insurance Partner</h2>
        <form onSubmit={onSubmit}>
          <div className="form-row">
            <TextField
              id="outlined-required"
              label="Company Name"
              type="text"
              {...register("name", {
                required: true,
              })}
            />
          </div>
          {errors.managerId ? (
            <p className="form-error">Enter a valid company name</p>
          ) : (
            ""
          )}
          <div className="form-row">
            <TextField
              id="outlined-required"
              label="Company Address"
              type="text"
              {...register("address", {
                required: true,
              })}
            />
          </div>
          {errors.managerName ? (
            <p className="form-error">Enter address to continue</p>
          ) : (
            ""
          )}
          <div className="form-row">
            <TextField
              id="outlined-required"
              label="Representative"
              type="text"
              {...register("representative", {
                required: true,
              })}
            />
          </div>
          {errors.managerName ? (
            <p className="form-error">Enter a name to continue</p>
          ) : (
            ""
          )}
          <div className="form-row">
            <TextField
              id="outlined-required"
              label="Phone Number"
              type="text"
              {...register("phoneNumber", {
                required: true,
              })}
            />
          </div>

          {errors.phoneNumber ? (
            <p className="form-error">Enter a number to continue</p>
          ) : (
            ""
          )}
          <div className="form-row">
            <TextField
              id="outlined-required"
              label="Email"
              type="email"
              {...register("email", {
                required: true,
                pattern: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i,
              })}
            />
          </div>
          {errors.email ? (
            <p className="form-error">Enter a valid email</p>
          ) : (
            ""
          )}
          <div className="form-row">
            <TextField
              className="field"
              id="outlined-required"
              label="Password"
              type={showPassword ? "text" : "password"}
              {...register("password", { required: true })}
            />
            <div
              className="icon"
              style={{
                width: "auto",
                zIndex: 1,
                position: "absolute",
                right: "20px",
                top: "50%",
              }}
            >
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </IconButton>
            </div>
          </div>
          {errors.password ? (
            <p className="form-error">Enter a password</p>
          ) : (
            ""
          )}
          <div className="form-row">
            <Button onClick={handleClick}>
              Upload file
              <input
                onChange={handleChange}
                type="file"
                ref={hiddenFileInput}
                style={{ display: "none" }}
              />
            </Button>
            <p>{file != null ? file.name : ""}</p>
          </div>
          <div className="form-row">
            <button className="btn btn-large">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
