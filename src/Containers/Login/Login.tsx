import "./styles.css";
import { IconButton, TextField } from "@mui/material";
import FormHeader from "../../Components/FormHeader/FormHeader";
import { useForm } from "react-hook-form";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import { Translate } from "@mui/icons-material";
import { login } from "../../Utitlity/Services/authentication";
import { loginRequest } from "../../Utitlity/Models/models";
import { useNavigate } from "react-router-dom";
function LoginScreen() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState(false);

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    const loginRequest: loginRequest = {
      username: data.email,
      password: data.password,
    };
    login(loginRequest).then((resp) => {
      if (resp.status != 200) {
        console.log(resp);
        setLoginError(true);
      } else {
        setLoginError(false);
        //store jwt
        localStorage.setItem("jwt", resp.data.jwt);
        localStorage.setItem("role", resp.data.role);
        localStorage.setItem("name", resp.data.name);
        //reset form
        reset();
        //Navigate to landing page
        navigate("/");
      }
    });
  });
  function handleClickShowPassword() {
    setShowPassword((value) => !value);
  }
  return (
    <div className="login-container">
      <div className="form-container">
        <form onSubmit={onSubmit}>
          <FormHeader title="Login" />
          <div className="form-fields">
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
            <div className="form-row" style={{ marginTop: "20px" }}>
              <button className="btn btn-large">Login</button>
              {loginError ? (
                <p className="form-error">
                  Invalid Credentials, Please try again!
                </p>
              ) : (
                ""
              )}
            </div>
            <p style={{ textAlign: "center" }}>
              Don't have an account?<a href="/signup"> Sign up</a> here
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
export default LoginScreen;
