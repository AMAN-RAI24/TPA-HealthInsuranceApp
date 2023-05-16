import { Details, ReplayOutlined } from "@mui/icons-material";
import {
  Button,
  Collapse,
  createTheme,
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { display, fontSize } from "@mui/system";
import { exit } from "process";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { isNull } from "util";
import { role, userPolicy } from "../../Utitlity/Models/models";
import {
  getClaimDetails,
  getUserPolicy,
  updateUserPolicy,
} from "../../Utitlity/Services/UserViewPolicyService";
import "./userpolicy.css";
// loading animation
import constants from "../../Utitlity/Constants/Constants";
import { Loading } from "../../Components/Loading/loading";
import RequestClaim from "../Claim/RequestClaim";
import ViewClaims from "../Claim/ViewClaim";

function UserViewPolicy() {
  const [userpolicydata, setuserpolicydata] = useState<userPolicy>();
  const [premium, setPremium] = useState(0);
  useEffect(() => {
    getUserPolicy(localStorage.getItem("jwt"))
      .then((data: object) => {
        // setTimeout(() => {
          setIsLoading(false);
        // }, 1000);
        type keyobj = keyof typeof data;
        const key = "data" as keyobj;
        if (data[key] === "") {
          setButtonActive(() => false);
          setHavePolicy(() => false);
          setClaimButton(() => false);
        }

        setuserpolicydata(() => data[key]);
        var total = 0;
        Array(data[key]["userFamilyDetails"]).map((family) => {
          family.map((member: any) => {
            if (member["age"] <= 10) {
              total = total + 3000;
            } else {
              total = total + 5000;
            }
          });
        });
        // for(var i=0;i<Array(data[key]['userFamilyDetails']).length;i++){

        // }
        console.log(Array(data[key]["userFamilyDetails"]), total);
        setPremium(total);
        console.log(data);
      })
      .catch((err) => {
        setHavePolicy(false);
        setButtonActive(false);
      });
    getClaimDetails(localStorage.getItem("jwt")).then((data: any) => {
      if (data.status === 200) {
        console.log(data.data);
        if (data.data.length > 0) {
          setViewClaim(() => true);
        } else {
          setViewClaim(() => false);
        }
      }
    });
    console.log(userpolicydata);
  }, []);

  const [isLoading, setIsLoading] = useState(true);
  const [havePolicy, setHavePolicy] = useState(true);
  const [buttonActive, setButtonActive] = useState(true);
  const [isDivActive, setDivActive] = useState(false);
  const [numberOfRows, setNumberOfRows] = useState(0);
  const [isFamilyActive, setFamilyActive] = useState(true);
  const [familyDetails, setFamilyDetails] = useState([{}]);
  const [RequestActive, SetRequestActive] = useState(false);
  const [ClaimButton, setClaimButton] = useState(true);
  const [imageList, setImageList] = useState(Array<File>());
  const [viewClaim, setViewClaim] = useState(false);
  const [showClaims, setShowClaims] = useState(false);
  const viewEdit = () => {
    setDivActive((value) => !value);
    setButtonActive((value) => !value);
    setClaimButton((value) => !value);
  };

  const viewClaimRequest = () => {
    SetRequestActive((value) => !value);
    setClaimButton((value) => !value);
    setButtonActive((value) => !value);
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const Relations = [
    "SELF",
    "SPOUSE",
    "CHILD",
    "FATHER",
    "MOTHER",
    "FATHER in LAW",
    "MOTHER in LAW",
  ];
  const renderRelations = Relations.map((i) => {
    return <MenuItem value={i}>{i}</MenuItem>;
  });
  const [filesStatus, setFilesStatus] = useState<any>([]);
  const handlesubmit = handleSubmit((data: any) => {
    console.log(data);
    setDivActive((value) => !value);
    setButtonActive((value) => !value);
    if (Object.keys(familyDetails[0]).length == 0) {
      familyDetails.splice(0, 1);
    }

    for (let i = 0; i < numberOfRows; i++) {
      const details: object = {
        name: data["Name" + i.toString()],
        relation: data["Relation" + i.toString()],
        age: data["Age" + i.toString()],
        phoneNumber: data["ProofID" + i.toString()],
        imageUrl: "link 1" + i.toString(),
      };
      imageList.push(data["Proof" + i.toString()][0]);
      familyDetails.push(details);
    }
    // console.log(imageList);
    let policy: object = {
      coverage: data["coverage"],
      familyDetails: familyDetails,
      // familyIdImages: imageList
    };
    // console.log(policy)
    const formData = new FormData();
    // formData.append("coverage", data["coverage"]);
    // formData.append("familyDetails", JSON.stringify(familyDetails));
    // formData.append("familyIdImages", JSON.stringify(imageList));
    formData.append("policy", JSON.stringify(policy));
    // formData.append("files",imageList);
    // console.log(JSON.stringify(imageList))

    // for(let i = 0; i < imageList.length; i++){

    // }
    console.log("TESTING");

    imageList.map((one, another) => {
      // console.log(JSON.stringify(one))
      formData.append("files", one);
    });
    console.log(formData);
    setIsLoading(true);
    updateUserPolicy(localStorage.getItem("jwt"), formData).then((value) => {
      console.log(value);
      setFamilyDetails((value) => [{}]);
      window.location.reload();
    });
  });
  const addFamilyClicked = handleSubmit((data: any) => {
    const fileArray = [];
    for (let i = 0; i < Math.floor(Number(data.fmcount)); i++) {
      fileArray.push(false);
    }
    setFilesStatus(fileArray);
    setNumberOfRows((value) => Math.floor(Number(data.fmcount)));
  });
  const cancel = handleSubmit((data: any) => {
    setDivActive((value) => !value);
    setButtonActive((value) => !value);
    setClaimButton((value) => !value);
  });
  const renderFamily = [...Array(numberOfRows)].map((e, i) => {
    return (
      <div className="row">
        <div className="col" style={{ width: "5%" }}>
          <span
            id="inspan"
            style={{ marginRight: "5px", marginTop: "10px", paddingTop: "2px" }}
          >
            {" "}
            {i + 1}.
          </span>

          <TextField
            id="outlined-required"
            className="input-field"
            label="Name"
            type="text"
            style={{
              maxWidth: "250px",
              marginTop: "10px",
              marginLeft: "auto",
              marginRight: "5px",
              borderRadius: "10px",
              marginInline: "10px",
            }}
            InputLabelProps={{ required: true }}
            {...register("Name" + i.toString())}
          />
          {/* <TextField
            id="outlined-required"
            label="Relation"
            className="input-field"
            type="text"
            InputLabelProps={{ required: true }}
            style={{
              maxWidth: "250px",
              marginTop: "10px",
              marginLeft: "auto",
              marginRight: "5px",
              borderRadius: "10px",
              marginInline: "10px",
            }}
            {...register("Relation" + i.toString())}
          /> */}

          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-label">Relation</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              label="Relation"
              id="demo-simple-select"
              style={{
                width: "250px",
              }}
              {...register("Relation" + i.toString())}
            >
              {renderRelations}
            </Select>
          </FormControl>
          <TextField
            id="outlined-required"
            label="Age"
            type="text"
            className="input-field"
            InputLabelProps={{ required: true }}
            style={{
              maxWidth: "250px",
              marginTop: "10px",
              marginLeft: "auto",
              marginRight: "5px",
              borderRadius: "10px",
              marginInline: "10px",
            }}
            {...register("Age" + i.toString())}
          />
          <TextField
            id="outlined-required"
            label="Proof ID"
            type="text"
            className="input-field"
            InputLabelProps={{ required: true }}
            style={{
              maxWidth: "250px",
              marginTop: "10px",
              marginLeft: "auto",
              marginRight: "5px",
              borderRadius: "10px",
              marginInline: "10px",
            }}
            {...register("ProofID" + i.toString())}
          />
          <input
            type="file"
            placeholder="Attach ID"
            accept="image/*"
            {...register("Proof" + i.toString())}
          />
          {/* <Button
            variant="contained"
            component="label"
            id={"file" + i.toString()}
            onClick={() => {
              console.log(filesStatus);
              setFilesStatus((current: any) => {
                current[i] = true;
                return current;
              });
            }}
          >
            Attach ID
            {filesStatus[i] == true ? "added" : "asd"}
            <input
              type="file"
              placeholder="Attach ID"
              accept="image/*"
              hidden
              {...register("Proof" + i.toString())}
            />
          </Button> */}

          <br></br>
          <br></br>
          <hr></hr>
          <br></br>
          <br></br>
        </div>
      </div>
    );
  });

  return (
    <div className="container" style={{ marginBottom: "30px" }}>
      {isLoading ? (
        <div
          style={{
            width: "100%",
            height: "90vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Loading />
        </div>
      ) : (
        <>
          <h1>Active Plan</h1>
          <div className="viewcontainer">
            <div className="row">
              <div className="col">
                <h3 style={{ fontSize: "25px" }}>
                  {havePolicy
                    ? userpolicydata?.groupPolicy.company?.companyName
                    : "Comapny"}
                </h3>
              </div>
            </div>
            <div className="row">
              <div className="col" style={{ fontSize: "23px" }}>
                {havePolicy
                  ? userpolicydata?.groupPolicy.policyName
                  : "No Plans Available"}{" "}
                {havePolicy
                  ? userpolicydata?.groupPolicy.creationDate.slice(0, 4)
                  : " "}
              </div>
              <div
                className="col"
                style={{ textAlign: "right", fontSize: "30px" }}
              >
                <span id="rupee">&#8377;</span>
                {premium}/<span>year</span>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <h4 style={{ fontSize: "17px" }}>
                  {havePolicy
                    ? userpolicydata?.groupPolicy.familyDetails.adults
                    : ""}{" "}
                  Adults{" "}
                  {havePolicy
                    ? userpolicydata?.groupPolicy.familyDetails.children
                    : ""}{" "}
                  children
                </h4>
              </div>
            </div>
            <div className="row" style={{ float: "right" }}>
              <input
                type="button"
                value="Request Claim"
                id="up-submit"
                style={{ display: ClaimButton ? "block" : "none" }}
                onClick={viewClaimRequest}
              />
              <input
                type="button"
                value="Customize"
                id="up-submit"
                style={{ display: buttonActive ? "block" : "none" }}
                onClick={viewEdit}
              />
            </div>
          </div>
          <div
            className="editcontainer"
            style={{ display: isDivActive ? "block" : "none" }}
          >
            <h2>Customize your plan</h2>
            <h3>Family Details</h3>
            <form name="editform" onSubmit={handlesubmit}>
              <div className="row">
                <div className="col">
                  <TextField
                    id="outlined-required"
                    label="Family Members"
                    type="text"
                    className="input-field"
                    defaultValue={1}
                    style={{ maxWidth: "250px", marginTop: "10px" }}
                    {...register("fmcount")}
                  />
                  <input
                    type="button"
                    value="Add Family"
                    id="up-submit"
                    onClick={addFamilyClicked}
                    style={{ marginTop: "15px", marginLeft: "10px" }}
                  />
                </div>
              </div>
              <br></br>
              <div
                className="family"
                style={{ display: isFamilyActive ? "block" : "none" }}
              >
                {renderFamily}
              </div>
              <h3>Add Extra Coverage (in Lacs)</h3>
              <div className="row">
                <div className="col">
                  <TextField
                    id="outlined-required"
                    label="Additional Coverage"
                    type="number"
                    className="input-field"
                    defaultValue={0}
                    style={{ maxWidth: "250px" }}
                    {...register("coverage")}
                  />
                </div>
              </div>
              <div className="row" style={{ float: "right" }}>
                <input
                  type="button"
                  value="Cancel"
                  id="cancel"
                  onClick={cancel}
                  style={{ marginTop: "10px", marginRight: "5px" }}
                />
                <input
                  type="submit"
                  value="Save"
                  id="up-submit"
                  style={{ marginTop: "10px" }}
                />
              </div>
            </form>
          </div>
          {RequestActive ? (
            <RequestClaim
              setIsLoading={setIsLoading}
              setShowClaims={setShowClaims}
              setRequestActive={SetRequestActive}
              setButtonActive={setButtonActive}
              setClaimButton={setClaimButton}
            />
          ) : (
            ""
          )}

          {showClaims ? (
            <ViewClaims
              showClaims={showClaims}
              setShowClaims={setShowClaims}
              setButtonActive={setButtonActive}
              setClaimButton={setClaimButton}
            />
          ) : (
            ""
          )}

          <h1>Plan Details</h1>

          <div className="card-container">
            <div className="view-card">
              <div className="row">
                <div className="col">
                  <h2 style={{ textAlign: "center" }}>Basic Details</h2>
                  <h3>
                    <pre>
                      Company{"              :   "}
                      {havePolicy
                        ? userpolicydata?.groupPolicy.company?.companyName
                        : ""}
                    </pre>
                  </h3>
                  <h3>
                    <pre>
                      Policy{"                    :   "}
                      {havePolicy ? userpolicydata?.groupPolicy.policyName : ""}
                    </pre>
                  </h3>
                  <h3>
                    <pre>
                      Date Of Creation {" :   "}
                      {havePolicy
                        ? userpolicydata?.groupPolicy.creationDate.slice(0, 10)
                        : ""}
                    </pre>
                  </h3>
                  <h3>
                    <pre>
                      Manager{"               :   "}
                      {havePolicy
                        ? userpolicydata?.groupPolicy.manager?.name
                        : ""}
                    </pre>
                  </h3>
                </div>
                {/* <div className='col'>
                            <h2><pre> </pre></h2>
                            <h3><pre>: { havePolicy ? userpolicydata?.groupPolicy.maternityBenefits.csectionDelivery : "" } %</pre></h3>
                            <h3><pre>: { havePolicy ? userpolicydata?.groupPolicy.maternityBenefits.normalDelivery : "" } %</pre></h3>
                    </div> */}
              </div>
            </div>
            <div className="view-card">
              <div className="row">
                <div className="col">
                  <h2 style={{ textAlign: "center" }}>
                    <pre>Benefits</pre>
                  </h2>
                  <h3>
                    <pre>
                      Coverage{"              :   "}
                      {Number(havePolicy ? userpolicydata?.coverage : 0) +
                        Number(
                          havePolicy ? userpolicydata?.groupPolicy.coverage : 0
                        )}{" "}
                      lakhs
                    </pre>
                  </h3>
                  <h3>
                    <pre>
                      Hospital Tier{"        :  "}
                      {havePolicy
                        ? userpolicydata?.groupPolicy.hospitalTier
                        : ""}
                    </pre>
                  </h3>
                  <h3>
                    <pre>
                      Room Rent Limit {":  "}
                      {havePolicy
                        ? userpolicydata?.groupPolicy.roomRentLimit
                        : ""}{" "}
                    </pre>
                  </h3>
                  <h3>
                    <pre>
                      Family{"                   :  "}
                      {havePolicy
                        ? userpolicydata?.userFamilyDetails.length
                        : 0}{" "}
                    </pre>
                  </h3>
                  <h3>
                    <pre>
                      Diagnostic Test {"  :  "} {havePolicy ? "YES" : "NO"}
                    </pre>
                  </h3>
                </div>
                {/* <div className='col'>
                            <h2><pre> </pre></h2>
                            <h3>: { Number( havePolicy ? userpolicydata?.coverage : 0 )+Number( havePolicy ? userpolicydata?.groupPolicy.coverage : 0) } lakhs</h3>
                            <h3>: { havePolicy ? userpolicydata?.groupPolicy.hospitalTier : ""}</h3>
                            <h3>: { havePolicy ? userpolicydata?.groupPolicy.roomRentLimit : "" }</h3>
                            <h3>: { havePolicy ? userpolicydata?.userFamilyDetails.length : 0 }</h3>
                            <h3>: { havePolicy ? "YES" : "NO"}</h3>
                    </div> */}
              </div>
            </div>
          </div>
          <div className="card-container">
            <div className="view-card">
              <div className="row">
                <div className="col">
                  <h2 style={{ textAlign: "center" }}>
                    <pre>Surgery claims</pre>
                  </h2>
                  <h3>
                    <pre>
                      Bypass Surgery {"   :  "}
                      {havePolicy
                        ? userpolicydata?.groupPolicy.maximumClaim.bypassSurgery
                        : ""}{" "}
                      %
                    </pre>
                  </h3>
                  <h3>
                    <pre>
                      Angiography {"        :  "}
                      {havePolicy
                        ? userpolicydata?.groupPolicy.maximumClaim.angiography
                        : ""}{" "}
                      %
                    </pre>
                  </h3>
                  <h3>
                    <pre>
                      Cataract Surgery {" :  "}
                      {havePolicy
                        ? userpolicydata?.groupPolicy.maximumClaim
                            .cataractSurgery
                        : ""}{" "}
                      %
                    </pre>
                  </h3>
                  <h3>
                    <pre>
                      Hospitalization {"    :  "}
                      {havePolicy
                        ? userpolicydata?.groupPolicy.maximumClaim
                            .hospitalization
                        : ""}{" "}
                      %
                    </pre>
                  </h3>
                  <h3>
                    <pre>
                      Covid Coverage {"   :  "}
                      {havePolicy
                        ? userpolicydata?.groupPolicy.maximumClaim.covidCoverage
                        : ""}{" "}
                      %
                    </pre>
                  </h3>
                </div>
                {/* <div className='col'>
                            <h2><pre> </pre></h2>
                            <h3><pre>: { havePolicy ? userpolicydata?.groupPolicy.maximumClaim.bypassSurgery : "" } %</pre></h3>
                            <h3><pre>: { havePolicy ? userpolicydata?.groupPolicy.maximumClaim.angiography : "" } %</pre></h3>
                            <h3><pre>: { havePolicy ? userpolicydata?.groupPolicy.maximumClaim.cataractSurgery : ""} %</pre></h3>
                            <h3><pre>: { havePolicy ? userpolicydata?.groupPolicy.maximumClaim.hospitalization : ""} %</pre></h3>
                            <h3><pre>: { havePolicy ? userpolicydata?.groupPolicy.maximumClaim.covidCoverage : ""} %</pre></h3>
                    </div> */}
              </div>
            </div>
            <div className="view-card">
              <div className="row">
                <div className="col">
                  <h2 style={{ textAlign: "center" }}>Maternity Benefits</h2>
                  <h3>
                    <pre>
                      C-Section {"  :  "}
                      {havePolicy
                        ? userpolicydata?.groupPolicy.maternityBenefits
                            .csectionDelivery
                        : ""}{" "}
                      %
                    </pre>
                  </h3>
                  <h3>
                    <pre>
                      Normal {"      :  "}
                      {havePolicy
                        ? userpolicydata?.groupPolicy.maternityBenefits
                            .normalDelivery
                        : ""}{" "}
                      %
                    </pre>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default UserViewPolicy;
function register(
  arg0: string
): JSX.IntrinsicAttributes & import("@mui/material").TextFieldProps {
  throw new Error("Function not implemented.");
}
