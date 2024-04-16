import axios from "axios"
export const loginUserAPI = async (credentials) => {
  try {
    const response = await axios.post("/api/login", credentials);
    console.log(response);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const signupUserAPI = async (userData) => {
  try {
    const response = await axios.post("/api/signup", userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
