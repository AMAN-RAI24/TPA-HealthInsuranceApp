import { Button } from "@mui/material";
import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
  useEffect,
  useState,
} from "react";
import { useParams } from "react-router-dom";
import { Bidding } from "../../Components/AuctionOverlay/Bidding";
import { Loading } from "../../Components/Loading/loading";
import { Card } from "../../Components/PolicyDetailsCard/PolicyDetailsCard";
import { groupPolicy, user } from "../../Utitlity/Models/models";
import {
  getCompanyAndManagerDetails,
  getPolicy,
} from "../../Utitlity/Services/policy";
import "./styles.css";

export function ViewPolicy1() {
  const [overlay, setOverlay] = useState(false);
  const [action, setAction] = useState(false);
  useEffect(() => {
    const cards = document.querySelectorAll(".policy-container .card");
    cards.forEach((card) => {
      card.classList.add("appear");
    });
  });
  const [basicDetails, setBasicDetails] = useState({
    data: ["Company Name", "Date of Creation", "Policy Name", "Manager Name"],
    value: [
      "HashedIn",
      "2022-08-07",
      "HashedIn Plan infinity",
      "God of thunder",
    ],
  });
  const [genderDetails, setGenderDetails] = useState({
    data: ["Males", "Females", "Others"],
    value: [0, 0, 0],
  });
  const [ageDetails, setAgeDetails] = useState({
    data: ["Age 18-35", "Age 35-50", "Age 50-60", "Age 60+"],
    value: [0, 0, 0, 0],
  });
  const [benefitsDetails, setBenefitsDetails] = useState({
    data: [
      "Coverage",
      "Hospital Tier",
      "Room rent limit",
      "Family",
      "Diagnostic Test",
    ],
    value: ["1 Lac", "4", "3", "Yes", "Yes"],
  });
  const [surgeryClaims, setSurgeryClaims] = useState({
    data: [
      "Bypass Surgery",
      "Angiography",
      "Cataract Surgery",
      "Hospitalization",
      "Covid Coverage",
    ],
    value: ["80%", "90%", "0%", "90%", "60%"],
  });
  const [maternityBenefits, setMaternityBenefits] = useState({
    data: ["C-Section Delivery", "Normal Delivery"],
    value: ["90%", "90%"],
  });
  const [info, setInfo] = useState<groupPolicy>({
    employeeDistribution: {
      ageGroup1: "",
      ageGroup2: "",
      ageGroup3: "",
      ageGroup4: "",
      males: "",
      females: "",
      others: "",
    },
    maximumClaim: {
      angiography: "",
      bypassSurgery: "",
      covidCoverage: "",
      cataractSurgery: "",
      hospitalization: "",
    },
    familyDetails: {
      adults: "0",
      children: "0",
    },
    maternityBenefits: {
      csectionDelivery: "",
      normalDelivery: "",
    },
    creationDate: "",
    roomRentLimit: "",
    hospitalTier: "",

    diagnosticTest: false,
    coverage: "0",
    policyName: " ",
    type: " ",
  });
  const [managerInfo, setManagerInfo] = useState<user>({
    userId: "",
    employeeId: "",
    email: "",
    name: "",
    mobileNumber: "",
    date: new Date(),
    password: "",
    company: {
      companyName: "",
      contactInformation: "",
      address: "",
    },
    role: {
      role: "",
    },
  });
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log(info);
    getPolicy(parseInt("" + id)).then((resp) => {
      console.log(resp);
      setInfo(resp);
      setBasicDetails((state) => {
        return {
          ...state,
          value: [
            resp.company == null ? "Insure Corp" : resp.company.companyName,
            resp.creationDate.split("T")[0],
            resp.policyName,
            resp.manager.name,
          ],
        };
      });
      setBenefitsDetails((state) => {
        return {
          ...state,
          value: [
            resp.coverage,
            resp.hospitalTier,
            resp.roomRentLimit,
            "Yes",
            resp.diagnosticTest ? "YES" : "NO",
          ],
        };
      });
      setGenderDetails((state) => {
        return {
          ...state,
          value: [
            resp.employeeDistribution.males,
            resp.employeeDistribution.females,
            resp.employeeDistribution.others,
          ],
        };
      });
      setAgeDetails((state) => {
        return {
          ...state,
          value: [
            resp.employeeDistribution.ageGroup1,
            resp.employeeDistribution.ageGroup2,
            resp.employeeDistribution.ageGroup3,
            resp.employeeDistribution.ageGroup4,
          ],
        };
      });
      setSurgeryClaims((state) => {
        return {
          ...state,
          value: [
            resp.maximumClaim.bypassSurgery + " %",
            resp.maximumClaim.angiography + " %",
            resp.maximumClaim.cataractSurgery + " %",
            resp.maximumClaim.hospitalization + " %",
            resp.maximumClaim.covidCoverage + " %",
          ],
        };
      });
      setMaternityBenefits((state) => {
        return {
          ...state,
          value: [
            resp.maternityBenefits.csectionDelivery + " %",
            resp.maternityBenefits.normalDelivery + " %",
          ],
        };
      });
      getCompanyAndManagerDetails(
        "" + localStorage.getItem("jwt"),
        resp.groupPolicyId
      ).then((resp) => {
        setAction(resp.same);
        console.log(resp);
      });

      setManagerInfo(resp.manager);
      setIsLoading(false);
    });
  }, []);
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        minHeight: "80vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {isLoading ? (
        <Loading />
      ) : (
        <div className="policy-container">
          <div
            style={{
              width: "1500px",
              maxWidth: "100%",
              marginLeft: "30px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <h1>Plan Details</h1>
            {action ? (
              <Button
                onClick={() => {
                  setOverlay(true);
                }}
              >
                Check Offers
              </Button>
            ) : (
              ""
            )}
          </div>
          {localStorage.getItem("role") == "ROLE_INSURANCE"
            ? Card(genderDetails, "Gender Distribution")
            : ""}
          {localStorage.getItem("role") == "ROLE_INSURANCE"
            ? Card(ageDetails, "Age Distribution")
            : ""}
          {Card(basicDetails, "Basic Details")}{" "}
          {Card(benefitsDetails, "Benefits")}
          {Card(surgeryClaims, "Surgery Claims")}{" "}
          {Card(maternityBenefits, "Maternity Benefits")}
        </div>
      )}
      {overlay ? (
        <Bidding
          role={localStorage.getItem("role")}
          onClick={() => setOverlay(false)}
        ></Bidding>
      ) : (
        ""
      )}
    </div>
  );
}
