import axios from "axios";

import { baseUrl } from "../../components/HelperFunctions";

export const sendSignup = signupData => async dispatch => {
  console.log("the signup data ", signupData);
  const response = await axios.post(`${baseUrl}/signup`, signupData);
  dispatch(usersignedup(response.data));
};
const usersignedup = data => {
  console.log("data", data);
  return {
    type: "USER_SIGNEDUP",
    payload: data
  };
};

export const sendLogin = loginData => async dispatch => {
  // console.log("the login data ", loginData);
  const response = await axios.post(`${baseUrl}/login`, loginData);
  dispatch(userloggedin(response.data));
};
const userloggedin = data => {
  return {
    type: "USER_LOGGEDIN",
    payload: data
  };
};
