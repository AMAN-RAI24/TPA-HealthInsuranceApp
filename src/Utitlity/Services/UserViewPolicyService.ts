import axios from "axios";
import constants from "../Constants/Constants";
import { loginRequest } from "../Models/models";

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
  "Access-Control-Allow-Headers": "*",
  "Access-Control-Allow-Credentials": "true",
};

async function updateUserPolicy(jwt : any , userPolicy : object ) {
  const resp = await axios({
    url: constants.API_URL + "set-user-policy",
    method: "POST",

    data: 
      userPolicy,
    headers: {
        ...headers,
        Authorization: jwt,
        "Content-Type": "multipart/form-data",
        // "Content-Type": "application/octet-stream",
        // "Content-Type": "application/json"

    }
  }).catch((error) => {
    return error.response;
  });
  return resp;
}

async function getUserPolicy(jwt : any) {
  const resp = await axios({
    url: constants.API_URL + "get-user-policy",
    method: "GET",
    headers: {
      ...headers,
      Authorization : jwt
    }
  }).catch((error) => {
    return error.response;
  });
  return resp;
}

async function getClaimDetails(jwt : any) {
  const resp = await axios({
    url: constants.API_URL + "get-claims",
    method: "GET",
    headers: {
      ...headers,
      Authorization : jwt
    }
  }).catch((error) => {
    return error.response;
  });
  return resp;
}


export { updateUserPolicy , getUserPolicy , getClaimDetails}