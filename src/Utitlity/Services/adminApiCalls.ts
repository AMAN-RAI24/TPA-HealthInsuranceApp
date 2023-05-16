import axios from "axios";
import constants from "../Constants/Constants";
import { company, hospital, insuranceCompany, role } from "../Models/models";

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
  "Access-Control-Allow-Headers": "*",
  "Access-Control-Allow-Credentials": "true",
};
async function addRole(role: role) {
  console.log(role);
  const resp = await axios({
    url: constants.API_URL + "admin/add/role",
    data: { ...role },
    method: "POST",
    headers: headers,
  });
  const data = await resp.data;
  return data;
}

async function addCompany(company: company) {
  console.log(company);
  const resp = await axios({
    url: constants.API_URL + "admin/add/company",
    method: "POST",
    data: {
      ...company,
    },
    headers: headers,
  });
  const data = await resp.data;
  return data;
}

async function addHospital(hospital: hospital) {
  console.log(hospital);
  const resp = await axios({
    url: constants.API_URL + "admin/add/hospital",
    method: "POST",
    data: {
      ...hospital,
    },
    headers: headers,
  });
  const data = await resp.data;
  return data;
}

async function addInsuranceCompany(jwt: string, formData: any) {
  const resp = await axios({
    url: constants.API_URL + "admin/add/insurance-company",
    method: "POST",
    data: formData,
    headers: {
      ...headers,
      Authorization: jwt,
      "Content-Type": "multipart/form-data",
    },
  });
  const data = await resp.data;
  return data;
}
export { addRole, addCompany, addHospital, addInsuranceCompany };
