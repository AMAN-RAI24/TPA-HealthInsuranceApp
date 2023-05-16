import {
  PropaneOutlined,
  SettingsBackupRestoreSharp,
} from "@mui/icons-material";
import { MenuItem, Select, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  getFamilyDetails,
  getHospitals,
  requestClaimAPI,
} from "../../Utitlity/Services/claimRequestService";
import HistoryIcon from "@mui/icons-material/History";
import { color, display } from "@mui/system";

const RequestClaim = (props: {
  setIsLoading: any;
  setShowClaims: any;
  setRequestActive: any;
  setClaimButton: any;
  setButtonActive: any;
}) => {
  const [FamilyList, SetFamilyList] = useState(Array<String>());
  const [Hospitals, SetHospitals] = useState(Array<String>());
  useEffect(() => {
    getHospitals(localStorage.getItem("jwt")).then((data: any) => {
      if (data.request.status === 200) {
        let newlist = [...Hospitals];
        data.data.map((x: object) => {
          type keyobj = keyof typeof x;
          const key = "hospitalName" as keyobj;
          const key1 = "location" as keyobj;
          let y = x[key] + " " + x[key1];
          if (!newlist.includes(y)) {
            newlist.push(y);
          }
        });
        SetHospitals(() => newlist);
      }
    });
    getFamilyDetails(localStorage.getItem("jwt")).then((data: any) => {
      if (data.request.status === 200) {
        let newlist = [...FamilyList];
        data.data.map((x: object) => {
          type keyobj = keyof typeof x;
          const key = "name" as keyobj;
          if (!newlist.includes(x[key])) {
            newlist.push(x[key]);
          }
          console.log(x[key]);
        });
        SetFamilyList(() => newlist);
      }
    });
  }, []);

  const [DCategory, SetDCategory] = useState([
    "General",
    "Covid",
    "Maternity Normal",
    "Maternity C-Section",
  ]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const SubmitClaim = handleSubmit((data) => {
    console.log(data);
    var claimObject = {
      patient: data["Patient"],
      hospital: data["Hospital"],
      diseaseCategory: data["DiseaseCategory"],
      disease: data["Disease"],
      claimAmount: data["ClaimAmount"],
    };
    const formData = new FormData();
    formData.append("claim", JSON.stringify(claimObject));

    var fileList: FileList;
    fileList = data["Receipts"];
    for (var i = 0; i < fileList.length; i++) {
      formData.append("files", fileList[i]);
    }
    props.setIsLoading(true);
    requestClaimAPI(localStorage.getItem("jwt"), formData).then((resp) => {
      props.setButtonActive((value: boolean) => !value);
      props.setClaimButton((value: boolean) => !value);
      props.setRequestActive((value: boolean) => !value);
      window.location.reload();
    });
  });
  const cancel = () => {
    props.setButtonActive((value: any) => !value);
    props.setClaimButton((value: any) => !value);
    props.setRequestActive((value: any) => !value);
  };
  const renderPatients = FamilyList.map((i) => {
    return <MenuItem value={i.toString()}>{i}</MenuItem>;
  });
  const renderHospitals = Hospitals.map((i) => {
    return <MenuItem value={i.toString()}>{i}</MenuItem>;
  });
  const renderDCategory = DCategory.map((i) => {
    return <MenuItem value={i}>{i}</MenuItem>;
  });
  const handleHistory = () => {
    props.setShowClaims(() => true);
    props.setRequestActive((value: boolean) => !value);
  };
  return (
    <div className="editcontainer">
      {/* <input type="button" value={ HistoryIcon } onClick={ handleHistory }></input> */}
      <button
        style={{
          float: "right",
          alignContent: "space-between",
          display: "flex",
          color: "blue",
          border: "none",
          backgroundColor: "white",
          cursor: "pointer",
        }}
        onClick={handleHistory}
      >
        <span style={{ fontSize: "20px" }}>History</span>
        <HistoryIcon style={{ marginLeft: "4px" }}></HistoryIcon>
      </button>
      <form name="editForm" onSubmit={SubmitClaim}>
        <h2>Request Claim</h2>
        <div className="row" style={{ display: "flex", flexWrap: "wrap" }}>
          <div className="col">
            <h4>Patient</h4>
            <Select
              label="Patient"
              style={{ width: "300px" }}
              {...register("Patient")}
            >
              {renderPatients}
            </Select>
          </div>
        </div>
        <div className="row" style={{ display: "flex", flexWrap: "wrap" }}>
          <br></br>
          <div className="col">
            <h4>Disease Category</h4>
            <Select
              label="Disease Category"
              style={{ width: "300px" }}
              {...register("DiseaseCategory")}
            >
              {renderDCategory}
            </Select>
          </div>
          <div className="col">
            <h4>Disease</h4>
            <TextField
              id="outlined-required"
              label="Disease"
              type="text"
              className="input-field"
              style={{ maxWidth: "300px" }}
              {...register("Disease")}
            />
          </div>
        </div>
        <div className="row" style={{ display: "flex", flexWrap: "wrap" }}>
          <br></br>
          <div className="col">
            <h4>Hospital</h4>
            <Select
              label="Hospital"
              style={{ width: "300px" }}
              {...register("Hospital")}
            >
              {renderHospitals}
            </Select>
          </div>
          <div className="col">
            <h4>Claim Amount</h4>
            <TextField
              id="outlined-required"
              label="Claim Amount"
              type="text"
              className="input-field"
              style={{ maxWidth: "300px" }}
              {...register("ClaimAmount")}
            />
          </div>
        </div>
        <div className="row" style={{ display: "flex", flexWrap: "wrap" }}>
          <div className="col">
            <br></br>
            <h4>Documents</h4>
            <input type="file" multiple {...register("Receipts")}></input>
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
            value="Request Claim"
            id="up-submit"
            style={{
              marginTop: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default RequestClaim;
