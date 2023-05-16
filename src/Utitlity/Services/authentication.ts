import axios from "axios";
import constants from "../Constants/Constants";
import { loginRequest } from "../Models/models";

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
  "Access-Control-Allow-Headers": "*",
  "Access-Control-Allow-Credentials": "true",
};

async function login(loginRequest: loginRequest) {
  const resp = await axios({
    url: constants.API_URL + "log-in",
    method: "POST",
    data: {
      ...loginRequest,
    },
    headers: headers,
  }).catch((error) => {
    return error.response;
  });
  return resp;
}
function logout() {
  localStorage.clear();
}
export { login, logout };
