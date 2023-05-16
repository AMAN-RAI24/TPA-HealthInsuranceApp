import { useEffect, useState } from "react";
import { BasePlan } from "./BasePlan/BasePlan";
import { EmployeeDetails } from "./EmployeeDetails/EmployeeDetails";
import "./styles.css";
import pic1 from "../../Assets/Form images/1.svg";
import pic2 from "../../Assets/Form images/2.svg";
import pic3 from "../../Assets/Form images/3.svg";
import pic4 from "../../Assets/Form images/4.svg";
import pic5 from "../../Assets/Form images/5.svg";
import pic6 from "../../Assets/Form images/6.svg";
import pic7 from "../../Assets/Form images/7.svg";
import { PlanDetails } from "./PlanDetails/PlanDetails";
import { RiskCoverage } from "./RiskCoverage/RiskCoverage";
import { MaternityBenefits } from "./MaternityBenefits/MaternityBenefits";
import { FamilyDetails } from "./FamilyDetails/FamilyDetails";
import DoneIcon from "@mui/icons-material/Done";
import { useLocation } from "react-router-dom";
import { groupPolicy } from "../../Utitlity/Models/models";
import { addPolicy, getPolicy } from "../../Utitlity/Services/policy";
import { ViewSubmission } from "./Submission/ViewSubmission";
import { Unauthorized } from "../../Components/UnAuthorized/Unauthorized";

export function CreatePolicy() {
  const [role, setRole] = useState("");
  const location = useLocation();
  useEffect(() => {
    setRole("" + localStorage.getItem("role"));
    console.log(location.pathname);
    console.log(state);
  }, []);
  const switchForm = () => {
    {
      switch (state.step) {
        case 1:
          return (
            <BasePlan role={role} state={state} handleChange={handleChange} />
          );

        case 2:
          return <EmployeeDetails state={state} handleChange={handleChange} />;
        case 3:
          return <PlanDetails state={state} handleChange={handleChange} />;
        case 4:
          return <RiskCoverage state={state} handleChange={handleChange} />;
        case 5:
          return (
            <MaternityBenefits state={state} handleChange={handleChange} />
          );
        case 6:
          return <FamilyDetails state={state} handleChange={handleChange} />;
        case 7:
          return <ViewSubmission policyId={policyId}></ViewSubmission>;
        default:
          break;
      }
    }
  };
  const prevStep = () => {
    if (state.step > 1) setState({ ...state, step: state.step - 1 });
  };

  const submitForm = () => {
    const data: groupPolicy = {
      coverage: state.coverage,
      diagnosticTest: state.diagnosticTest == "yes" ? true : false,
      employeeDistribution: {
        ageGroup1: state.ageGroup1,
        ageGroup2: state.ageGroup2,
        ageGroup3: state.ageGroup3,
        ageGroup4: state.ageGroup4,
        males: state.males,
        females: state.females,
        others: state.others,
      },
      familyDetails: {
        adults: state.adults.toString(),
        children: state.children.toString(),
      },
      creationDate: new Date().toISOString(),
      hospitalTier: state.hospitalTier,
      maternityBenefits: {
        csectionDelivery: state.cSectionDelivery,
        normalDelivery: state.normalDelivery,
      },
      maximumClaim: {
        angiography: state.angiography,
        bypassSurgery: state.bypassSurgery,
        covidCoverage: state.covidCoverage,
        cataractSurgery: state.cataractSurgery,
        hospitalization: state.hospitalization,
      },
      policyName: state.policyName,
      roomRentLimit: state.roomRentLimit,
      type: role == "ROLE_MANAGER" ? "COMPANY" : "BASE",
      status: role == "ROLE_MANAGER" ? "PENDING" : "APPROVED",
    };
    const jwt = "" + localStorage.getItem("jwt");
    addPolicy(data, jwt).then((resp) => {
      console.log(resp);
      setPolicyId(resp.policyId);
    });
    console.log(data);
  };
  const [policyId, setPolicyId] = useState(0);
  const nextStep = () => {
    //submit form and call api endpoint to add policy
    if (validateForm()) {
      setState({ ...state, step: state.step + 1 });
    }
  };
  const validateForm = () => {
    if (state.step >= 2) {
      if (
        state.ageGroup1 === "" ||
        state.ageGroup2 === "" ||
        state.ageGroup3 === "" ||
        state.ageGroup4 === "" ||
        state.males === "" ||
        state.females === "" ||
        state.others === ""
      ) {
        setFormError((currentFormError) => {
          return { ...currentFormError, employeeDetails: true };
        });
        return false;
      } else {
        setFormError((currentFormError) => {
          return { ...currentFormError, employeeDetails: false };
        });
      }
      //employee distribution
    }
    if (state.step >= 3) {
      //plan details
      if (
        state.policyName === "" ||
        state.coverage === "" ||
        state.roomRentLimit === "" ||
        state.hospitalTier === ""
      ) {
        setFormError((currentFormError) => {
          return { ...currentFormError, planDetails: true };
        });
        return false;
      } else {
        setFormError((currentFormError) => {
          return { ...currentFormError, planDetails: false };
        });
      }
    }
    if (state.step >= 4) {
      //risk coverage
      if (
        state.angiography === "" ||
        state.bypassSurgery === "" ||
        state.cataractSurgery === "" ||
        state.covidCoverage === "" ||
        state.hospitalization === ""
      ) {
        setFormError((currentFormError) => {
          return { ...currentFormError, riskCoverage: true };
        });
        return false;
      } else {
        setFormError((currentFormError) => {
          return { ...currentFormError, riskCoverage: false };
        });
      }
    }
    if (state.step >= 5) {
      //maternity benefits
      if (state.cSectionDelivery === "" || state.normalDelivery === "") {
        setFormError((currentFormError) => {
          return { ...currentFormError, maternityBenefits: true };
        });
        return false;
      } else {
        setFormError((currentFormError) => {
          return { ...currentFormError, maternityBenefits: false };
        });
      }
    }
    if (state.step == 6) {
      //family details
      if (state.adults <= 0 || state.children < 0) {
        setFormError((currentFormError) => {
          return { ...currentFormError, familyDetails: true };
        });
        return false;
      } else {
        setFormError((currentFormError) => {
          return { ...currentFormError, familyDetails: false };
        });
        submitForm();
      }
    }
    return true;
  };

  const handleChange = (input: any) => (e: { target: { value: any } }) => {
    let updatedState = state;
    if (input == "basePlan") {
      getPolicy(e.target.value, "").then((resp) => {
        console.log("hello");
        setState((prevState) => ({
          ...prevState,
          angiography: resp.maximumClaim.angiography,
          bypassSurgery: resp.maximumClaim.bypassSurgery,
          covidCoverage: resp.maximumClaim.covidCoverage,
          cataractSurgery: resp.maximumClaim.cataractSurgery,
          roomRentLimit: resp.roomRentLimit,
          hospitalTier: resp.hospitalTier,
          hospitalization: resp.maximumClaim.hospitalization,
          cSectionDelivery: resp.maternityBenefits.csectionDelivery,
          normalDelivery: resp.maternityBenefits.normalDelivery,
          diagnosticTest: resp.diagnosticTest ? "yes" : "no",
          coverage: resp.coverage,
          policyName: "",
          type: "company",
          adults: 2,
          children: 2,
          [input]: e.target.value,
        }));
      });
      setState(updatedState);
    } else {
      updatedState = { ...state, [input]: e.target.value };
      setState(updatedState);
    }
  };
  const formHeading = [
    { heading: "Choose a base plan.", image: pic1 },
    { heading: "Fill the Employee distribution details.", image: pic2 },
    { heading: "Edit the plan details", image: pic3 },
    { heading: "Edit the risk coverage (%age covered)", image: pic4 },
    { heading: "Edit the maternity benefits (%age covered)", image: pic5 },
    { heading: "Edit the family members (per employee)", image: pic6 },
    { heading: "Policy added successfully", image: pic7 },
  ];
  const setStep = (num: number) => {
    const updatedState = { ...state, step: num };
    setState(updatedState);
  };
  const [formError, setFormError] = useState({
    employeeDetails: false,
    planDetails: false,
    riskCoverage: false,
    maternityBenefits: false,
    familyDetails: false,
  });
  const [state, setState] = useState({
    step: 1,
    ageGroup1: "",
    ageGroup2: "",
    ageGroup3: "",
    ageGroup4: "",
    males: "",
    females: "",
    others: "",
    angiography: "",
    bypassSurgery: "",
    covidCoverage: "",
    cataractSurgery: "",
    roomRentLimit: "",
    hospitalTier: "",
    hospitalization: "",
    cSectionDelivery: "",
    normalDelivery: "",
    diagnosticTest: "no",
    coverage: "",
    policyName: "",
    type: "company",
    adults: 1,
    children: 0,
    basePlan: 1,
  });
  return (
    <div className="create-policy-container">
      {role == "ROLE_MANAGER" || role == "ROLE_ADMIN" ? (
        <div className="section-container">
          <h1 className="section-header">
            Create the best Group Insurance policy !
          </h1>
          <div className="progress-container">
            <div
              className={state.step == 1 ? "steps current-step" : "steps"}
              onClick={() => setStep(1)}
            >
              {state.step > 1 ? <DoneIcon /> : 1}
            </div>
            <div
              className={state.step == 2 ? "steps current-step" : "steps"}
              onClick={() => setStep(2)}
            >
              {state.step > 2 ? <DoneIcon /> : 2}
            </div>
            <div
              className={state.step == 3 ? "steps current-step" : "steps"}
              onClick={() => setStep(3)}
            >
              {state.step > 3 ? <DoneIcon /> : 3}
            </div>
            <div
              className={state.step == 4 ? "steps current-step" : "steps"}
              onClick={() => setStep(4)}
            >
              {state.step > 4 ? <DoneIcon /> : 4}
            </div>
            <div
              className={state.step == 5 ? "steps current-step" : "steps"}
              onClick={() => setStep(5)}
            >
              {state.step > 5 ? <DoneIcon /> : 5}
            </div>
            <div
              className={state.step == 6 ? "steps current-step" : "steps"}
              onClick={() => setStep(6)}
            >
              {state.step > 6 ? <DoneIcon /> : 6}
            </div>
            <div className={state.step == 7 ? "steps current-step" : "steps"}>
              {state.step > 7 ? <DoneIcon /> : 7}
            </div>
          </div>
          <div className="form-container">
            <h2 className="form-heading">
              {state.step} . {formHeading[state.step - 1].heading}
            </h2>
            <div className="form-image">
              <img src={formHeading[state.step - 1].image} alt="" />
            </div>
            {switchForm()}
            {formError.employeeDetails ||
            formError.planDetails ||
            formError.riskCoverage ||
            formError.maternityBenefits ||
            formError.familyDetails ? (
              <div className="create-policy-error-section">
                <p className="error">
                  {formError.employeeDetails
                    ? "Enter all the Employee Details"
                    : formError.planDetails
                    ? "Enter the Plan details"
                    : formError.riskCoverage
                    ? "Enter the Risk coverage details"
                    : formError.maternityBenefits
                    ? "Enter the maternity Benefits details"
                    : formError.familyDetails
                    ? "Enter  Family details"
                    : ""}
                </p>
              </div>
            ) : (
              ""
            )}

            {state.step != 7 ? (
              <div className="form-actions">
                <button className="outline-btn form-btn" onClick={prevStep}>
                  Prev
                </button>
                <button className="btn form-btn next" onClick={nextStep}>
                  {state.step == 6 ? "Submit" : "Next"}
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      ) : (
        <Unauthorized />
      )}
    </div>
  );
}
