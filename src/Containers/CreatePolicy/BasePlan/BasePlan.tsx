import { useEffect, useState } from "react";
import { Loading } from "../../../Components/Loading/loading";
import { policyDetails } from "../../../Utitlity/Models/models";
import {
  getBasePolicyDetails,
  getPolicyDetailsByCompany,
} from "../../../Utitlity/Services/policy";
import "./styles.css";
export function BasePlan(props: {
  state: any;
  handleChange: any;
  role: string;
}) {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getPolicyDetailsByCompany("" + localStorage.getItem("jwt")).then((resp) => {
      setPlans(resp);
      getBasePolicyDetails("" + localStorage.getItem("jwt")).then((resp) => {
        setAdminPlans(resp);
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      });
    });
  }, []);
  const [adminPlans, setAdminPlans] = useState<Array<policyDetails>>([
    {
      policyId: 0,
      policyName: "Policy",
      benefits: 0,
      coverage: 0,
    },
  ]);
  const [plans, setPlans] = useState<Array<policyDetails>>([
    {
      policyId: 0,
      policyName: "Policy",
      benefits: 0,
      coverage: 0,
    },
  ]);
  return (
    <div>
      {isLoading ? (
        <div
          style={{
            width: "100%",
            height: "100px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Loading />
        </div>
      ) : (
        <div>
          <p className="sub-section">Previous Plans</p>
          <div className="base-plan-container">
            {props.role == "ROLE_ADMIN"
              ? "ADMINS cannot select BASE plans"
              : plans.map((plan) => (
                  <div
                    className={
                      props.state.basePlan == plan.policyId
                        ? "base-plan selected"
                        : "base-plan"
                    }
                    key={plan.policyId}
                  >
                    <h3>Plan Name : {plan.policyName}</h3>
                    <p>Benefits : {plan.benefits}</p>
                    <p>Coverage : {plan.coverage} Lac</p>
                    <input
                      type="radio"
                      name="plan"
                      value={plan.policyId}
                      onChange={props.handleChange("basePlan")}
                      checked={props.state.basePlan == plan.policyId}
                    />
                  </div>
                ))}
          </div>
          <p className="sub-section">Standard Plans</p>
          <div className="base-plan-container">
            {props.role == "ROLE_ADMIN"
              ? "ADMINS cannot select BASE plans"
              : adminPlans.map((plan) => (
                  <div
                    className={
                      props.state.basePlan == plan.policyId
                        ? "base-plan selected"
                        : "base-plan"
                    }
                    key={plan.policyId}
                  >
                    <h3>Plan Name : {plan.policyName}</h3>
                    <p>Benefits : {plan.benefits}</p>
                    <p>Coverage : {plan.coverage} Lac</p>
                    <input
                      type="radio"
                      name="plan"
                      value={plan.policyId}
                      onChange={props.handleChange("basePlan")}
                      checked={props.state.basePlan == plan.policyId}
                    />
                  </div>
                ))}
          </div>
          {/* <div
      className={
        props.state.basePlan == 1 ? "base-plan selected" : "base-plan"
      }
      key={1}
    >
      <h3>Plan Name : Dil ka Cover</h3>
      <p>Benefits : 4</p>
      <p>Coverage : 2 Lac</p>
      <input
        type="radio"
        name="plan"
        value={"1"}
        onChange={props.handleChange("basePlan")}
        checked={props.state.basePlan == 1}
      />
    </div>
    <div
      className={
        props.state.basePlan == 2 ? "base-plan selected" : "base-plan"
      }
      key={2}
    >
      <h3>Plan Name : Dil ka Cover</h3>
      <p>Benefits : 4</p>
      <p>Coverage : 2 Lac</p>
      <input
        type="radio"
        name="plan"
        value={"2"}
        onChange={props.handleChange("basePlan")}
        checked={props.state.basePlan == 2}
      />
    </div>
    <div
      className={
        props.state.basePlan == 3 ? "base-plan selected" : "base-plan"
      }
      key={3}
    >
      <h3>Plan Name : Dil ka Cover</h3>
      <p>Benefits : 4</p>
      <p>Coverage : 2 Lac</p>
      <input
        type="radio"
        name="plan"
        value={"3"}
        onChange={props.handleChange("basePlan")}
        checked={props.state.basePlan == 3}
      />
    </div>
    <div
      className={
        props.state.basePlan == 4 ? "base-plan selected" : "base-plan"
      }
      key={4}
    >
      <h3>Plan Name : Dil ka Cover</h3>
      <p>Benefits : 4</p>
      <p>Coverage : 2 Lac</p>
      <input
        type="radio"
        name="plan"
        value={"4"}
        onChange={props.handleChange("basePlan")}
        checked={props.state.basePlan == 4}
      />
    </div> */}
        </div>
      )}
    </div>
  );
}
