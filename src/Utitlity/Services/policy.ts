import axios from "axios";
import Constants from "../Constants/Constants";
import { groupPolicy } from "../Models/models";
const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
  "Access-Control-Allow-Headers": "*",
  "Access-Control-Allow-Credentials": "true",
  "Content-Type": "application/json",
};
async function addPolicy(groupPolicy: groupPolicy, jwt: string) {
  const resp = await axios({
    url: Constants.API_URL + "add/policy",
    method: "POST",
    data: {
      ...groupPolicy,
    },
    headers: {
      ...headers,
      Authorization: jwt,
    },
  });
  const data = await resp.data;
  return data;
}
async function getPolicy(id: number, jwt?: string) {
  const resp = await axios({
    url: Constants.API_URL + "get-policy",
    method: "GET",
    params: {
      id: id,
    },
    headers: {
      ...headers,
    },
  });
  const data = await resp.data;
  return data;
}
async function getPolicyDetailsByCompany(jwt: string) {
  const resp = await axios({
    url: Constants.API_URL + "get-policy-by-company",
    method: "GET",
    headers: {
      ...headers,
      Authorization: jwt,
    },
  });
  const data = await resp.data;
  return data;
}
async function getBasePolicyDetails(jwt: string) {
  const resp = await axios({
    url: Constants.API_URL + "get-base-plans",
    method: "GET",
    headers: {
      ...headers,
      Authorization: jwt,
    },
  });
  const data = await resp.data;
  return data;
}
async function getCompanyAndManagerDetails(jwt: string, groupPolicyId: Number) {
  const resp = await axios({
    url: Constants.API_URL + "get-company-manager-details/" + groupPolicyId,
    method: "GET",
    headers: {
      ...headers,
      Authorization: jwt,
    },
  });
  const data = await resp.data;
  return data;
}
async function placeBid(jwt: string, data: Object) {
  const resp = await axios({
    url: Constants.API_URL + "make-offer/",
    method: "POST",
    data: data,
    headers: {
      ...headers,
      Authorization: jwt,
    },
  });
  return await resp.data;
}

async function acceptOffer(jwt: string, id: Number) {
  const resp = await axios({
    url: Constants.API_URL + "make-offer/" + id,
    method: "PUT",
    headers: {
      ...headers,
      Authorization: jwt,
    },
  });
  return await resp.data;
}
async function getBiddingDetails(jwt: string, id: string | undefined) {
  const resp = await axios({
    url: Constants.API_URL + "get-offer-data/" + id,
    method: "GET",
    headers: {
      ...headers,
      Authorization: jwt,
    },
  });
  return await resp.data;
}
export {
  addPolicy,
  getPolicy,
  getPolicyDetailsByCompany,
  getCompanyAndManagerDetails,
  getBasePolicyDetails,
  getBiddingDetails,
  placeBid,
  acceptOffer,
};
