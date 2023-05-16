import axios, { AxiosError } from "axios";
import constants from "../Constants/Constants";
import { company, role, user } from "../Models/models";

const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Credentials": "false",
  };
async function addUser(user : object){
    console.log(user);
    try{
    const resp = await axios({
      url: constants.API_URL + "signup",
      data: { ...user },
      method: "POST",
      headers: headers,
    });
    const data = await resp.data;
    return data
    }
    catch(error){
        const err=error as AxiosError
        if(err.response){
            console.log(err.response.status)
            console.log(err.response.data)
            return "user already exist"
        }
        else if(err.request){

        }
        else{
            console.log(err.message)
        }
    }
}
async function getCompany(company : String){
    console.log(company);
    const resp = await axios({
      url: constants.API_URL + "getcompanybyname/"+company,
      data: { ...company },
      method: "GET",
      headers: headers,
    });
    const data = await resp.data;
    return data;
}
async function getRole(role : String){
    console.log(role);
    const resp = await axios({
      url: constants.API_URL + "getrolebyname/"+role,
      data: { ...role },
      method: "GET",
      headers: headers,
    });
    const data = await resp.data;
    return data;
}
async function getCompanyList(){
    const resp = await axios({
      url: constants.API_URL + "getcompanylist",
      method: "GET",
      headers: headers,
    });
    const data = await resp.data;
    return data;
}
export { addUser , getCompany , getRole , getCompanyList};