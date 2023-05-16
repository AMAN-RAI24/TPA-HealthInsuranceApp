import axios from "axios";
import constants from "../Constants/Constants";

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
  "Access-Control-Allow-Headers": "*",
  "Access-Control-Allow-Credentials": "true",
};

async function requestClaimAPI(jwt: any, claim: object) {
  const resp = await axios({
    url: constants.API_URL + "claim-request",
    method: "POST",

    data: claim,
    headers: {
      ...headers,
      Authorization: jwt,
      "Content-Type": "multipart/form-data",
      // "Content-Type": "application/octet-stream",
      // "Content-Type": "application/json"
    },
  }).catch((error) => {
    return error.response;
  });

  return resp;
}
async function getFamilyDetails(jwt: any) {
  const resp = await axios({
    url: constants.API_URL + "get-family",
    method: "GET",
    headers: {
      ...headers,
      Authorization: jwt,
    },
  }).catch((error) => {
    return error.response;
  });
  return resp;
}
async function getHospitals(jwt: any) {
  const resp = await axios({
    url: constants.API_URL + "get-hospitals",
    method: "GET",
    headers: {
      ...headers,
      Authorization: jwt,
    },
  }).catch((error) => {
    return error.response;
  });
  return resp;
}

export { getFamilyDetails, getHospitals, requestClaimAPI };
