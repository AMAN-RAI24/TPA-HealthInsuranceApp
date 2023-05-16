import "./signupstyles.css";
import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import FormHeader from "../../Components/FormHeader/FormHeader";
import {
  addUser,
  getCompany,
  getCompanyList,
  getRole,
} from "../../Utitlity/Services/userApiCalls";
import { login } from "../../Utitlity/Services/authentication";
import { loginRequest } from "../../Utitlity/Models/models";
import { useNavigate } from "react-router-dom";
export {};

function SignUpRoute() {
  const navigate = useNavigate();
  useEffect(() => {
    getCompanyList().then((data: Array<object>) => {
      let newlist = [...companylist];
      data.map((item: object) => {
        type keyobj = keyof typeof item;
        const key = "companyName" as keyobj;
        if (!newlist.includes(item[key])) {
          newlist.push(item[key]);
        }
      });
      setcompanylist(newlist);
    });
    console.log(companylist);
  }, [getCompany]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const [companylist, setcompanylist] = useState([]);

  const formHandler = handleSubmit((data) => {
    console.log(data);
    let companyobject: object;
    let roleobject: object;
    getCompany(data.company).then((respcompanydata: any) => {
      companyobject = respcompanydata[0];
      console.log(companyobject);
      getRole(data.role).then((resproledata: any) => {
        roleobject = resproledata[0];
        console.log(roleobject);
        let userobject: object = {
          employeeId: data.empid,
          email: data.email,
          name: data.fullname,
          mobileNumber: data.mobile,
          date: data.dob,
          password: data.password,
          company: companyobject,
          role: roleobject,
        };
        console.log(userobject);
        addUser(userobject).then((respsignupdata: any) => {
          if (respsignupdata) {
            console.log(respsignupdata);
            const loginRequest: loginRequest = {
              username: data.email,
              password: data.password,
            };
            login(loginRequest).then((resp) => {
              if (resp.status !== 200) {
                alert("User Already Exist")
              } else {
                //store jwt
                localStorage.setItem("jwt", resp.data.jwt);
                localStorage.setItem("role", resp.data.role);
                localStorage.setItem("name", resp.data.name);
                //reset form
                reset();
                //Navigate to landing
                navigate("/");
              }
            });
          }
        });
      });
    });
    reset();
  });

  const renderOptions = companylist.map((company) => {
    return <option value={company}>{company}</option>;
  });

  return (
    <div className="signupcontainer">
      <div className="formcontainer">
        <FormHeader title="Sign up" />
        <form className="signupform" onSubmit={formHandler}>
          <table className="formtable">
            <tr>
              <td>
                <TextField
                  id="outlined-required"
                  label="Full Name"
                  type="text"
                  InputLabelProps={{ required: true }}
                  {...register("fullname", {
                    required: true,
                    minLength: 5,
                  })}
                />
              </td>
              <td>
                <input
                  type="text"
                  id="datalist"
                  placeholder="Select Company"
                  list="company"
                  {...register("company", {
                    required: true,
                  })}
                />
                <datalist id="company">{renderOptions}</datalist>
              </td>
            </tr>
            <tr>
              <td>
                {errors.fullname ? (
                  <p className="form-error">Enter valid Name</p>
                ) : (
                  ""
                )}
              </td>
            </tr>
            <tr>
              <td>
                <TextField
                  id="outlined-required"
                  label="Email"
                  type="email"
                  InputLabelProps={{ required: true }}
                  {...register("email", {
                    required: true,
                    pattern:
                      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i,
                  })}
                />
              </td>
              <td>
                <TextField
                  id="outlined-required"
                  label="Mobile Number"
                  type="text"
                  InputLabelProps={{ required: true }}
                  {...register("mobile", {
                    required: true,
                    pattern: /^[0-9]{10}$/i,
                  })}
                />
              </td>
            </tr>
            <tr>
              <td>
                {errors.email ? (
                  <p className="form-error">Enter valid Email</p>
                ) : (
                  ""
                )}
              </td>
              <td>
                {errors.mobile ? (
                  <p className="form-error">Enter valid Mobile no.</p>
                ) : (
                  ""
                )}
              </td>
            </tr>
            <tr>
              <td>
                <TextField
                  id="outlined-required"
                  label="Employee Id"
                  type="text"
                  InputLabelProps={{ required: true }}
                  {...register("empid", {
                    required: true,
                    minLength: 5,
                  })}
                />
              </td>
              <td>
                <TextField
                  id="outlined-required"
                  defaultValue={""}
                  type="date"
                  InputLabelProps={{ shrink: true, required: true }}
                  label="Date Of Birth"
                  {...register("dob", {
                    required: true,
                  })}
                />
              </td>
            </tr>
            <tr>
              <td>
                {errors.empid ? (
                  <p className="form-error">Enter valid emp id</p>
                ) : (
                  ""
                )}
              </td>
            </tr>
            <tr>
              <td>
                <TextField
                  id="outlined-required"
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  InputLabelProps={{ required: true }}
                  {...register("password", {
                    required: true,
                    minLength: 8,
                    pattern: /(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]/i,
                  })}
                />
              </td>
              <td>
                <TextField
                  id="outlined-required"
                  label="Confirm Password"
                  type={showPassword ? "text" : "password"}
                  InputLabelProps={{ required: true }}
                  {...register("confirmpassword", {
                    required: true,
                    minLength: 8,
                  })}
                />
              </td>
            </tr>
            <tr>
              <td>
                {errors.password ? (
                  <p className="form-error">Enter valid password</p>
                ) : (
                  ""
                )}
              </td>
            </tr>
            <tr>
              <td align="center" colSpan={2}>
                <h4>Select user type</h4>
              </td>
            </tr>
            <tr>
              <td align="center">
                <input
                  type="radio"
                  id="user"
                  value="ROLE_USER"
                  defaultChecked
                  {...register("role")}
                />
                <label htmlFor="user">Employee</label>
              </td>
              <td align="center">
                <input
                  type="radio"
                  id="manager"
                  value="ROLE_MANAGER"
                  {...register("role")}
                />
                <label htmlFor="manager">Manager</label>
              </td>
            </tr>
            <tr>
              <td align="center" colSpan={2}>
                <input width="100%" type="submit" value="Sign up" />
              </td>
            </tr>
            <tr>
              <td colSpan={2} align="center">
                <h4>
                  Already have an account? <a href="/login">Login</a>
                </h4>
              </td>
            </tr>
          </table>
        </form>
      </div>
    </div>
  );
}

export default SignUpRoute;
