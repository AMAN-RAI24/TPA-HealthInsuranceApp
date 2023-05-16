import { useEffect, useState } from "react";
import AdminActions from "../../Components/AdminActionsBar/AdminActions";
import AdminDetailsSection from "../../Components/AdminDetailsSection/AdminDetailsSection";
import "./style.css";
import axios from "axios";
import constants from "../../Utitlity/Constants/Constants";
function AdminDashboard() {
  const policy = (companyName: any, planName: any, coverage: any, hospitalTier: any, managerName: any, policyId: any) => {
    return (
      <div className="policy">
        <h1>{companyName}</h1>
        <h2>Plan Name : {planName}</h2>
        <p>Coverage: {coverage} Lac</p>
        <p>Hospital Tier : {hospitalTier}</p>
        <p>Manager: {managerName}</p>
        <p></p>
        <div className="actions">
          <button className="reject" onClick={() => {
            axios
              .put(constants.API_URL + "admin/set/" + policyId + "/REJECTED", {
                headers: {
                  Authorization: "" + localStorage.getItem("jwt"),
                },

              })
              .then((resp: { data: any }) => {
                console.log(resp.data);
                setData(resp.data);
                window.location.reload();
                
                // setTimeout(() => {
                //   setIsLoading(false);
                // }, 1000);
              })
              .catch((error: any) => {
                console.log(error);
              });
          }}>Reject</button>
          <button className="approve" onClick={() => {
            axios
              .put(constants.API_URL + "admin/set/" + policyId + "/APPROVED", {
                headers: {
                  Authorization: "" + localStorage.getItem("jwt"),
                },

              })
              .then((resp: { data: any }) => {
                console.log(resp.data);
                setData(resp.data);
                window.location.reload();
                // setTimeout(() => {
                //   setIsLoading(false);
                // }, 1000);
              })
              .catch((error: any) => {
                console.log(error);
              });
          }}>Approve</button>
        </div>
      </div>
    );
  };

  const [data, setData] = useState([
    {
      groupPolicyId: "",
      manager: { company: { companyName: null }, name: null },
      coverage: null,
      hospitalTier: null,
      policyName: null,
    },
  ]);
  useEffect(() => {
    axios
      .get(constants.API_URL + "admin/get/PENDING", {
        headers: {
          Authorization: "" + localStorage.getItem("jwt"),
        },
      })
      .then((resp: { data: any }) => {
        console.log(resp.data);
        setData(resp.data);
        
        // setTimeout(() => {
        //   setIsLoading(false);
        // }, 1000);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="admin-container">
      <AdminActions />
      {/* <AdminDetailsSection />
       */}
      <h1>Pending Policies</h1>
      <div className="policies-container">
        {/* {policy()}
        {policy()}
        {policy()}
        {policy()} */}
        {data.map((d) => (policy(d.manager.company.companyName,d.policyName,d.coverage,d.hospitalTier,d.manager.name,d.groupPolicyId)))}


        {/* <div className="policy">
          <h1>HashedIn</h1>
          <h2>Plan Name : Dil ka Dhadak</h2>
          <p>Coverage: 1 Lac</p>
          <p>Hospital Tier : 4</p>
          <p>Manager: Narendra Modi</p>
          <p></p>
          <div className="actions">
            <button className="reject">Reject</button>
            <button className="approve">Approve</button>
          </div>
        </div> */}
      </div>
    </div>
  );
}
export default AdminDashboard;
