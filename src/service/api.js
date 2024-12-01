import axios from "axios";
const URL = "http://localhost:8000";

export const authenticateSignup = async (data) => {
  try {
    return await axios.post(`${URL}/signup`, data);
  } catch (error) {
    console.log("error while calling signup api", error);
  }
};

export const authenticateLogin = async (data) => {
  try {
    const response = await axios.post(`${URL}/login`, data);
    // if (response.data && response.data.token) {
    //   localStorage.setItem('access_token', response.data.token);
    // }

    return response;
  } catch (error) {
    console.log("error while calling login api", error);
    return error.response;
  }
};


