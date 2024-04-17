import axios from "axios";

export const loginUserAPI = async (credentials) => {
  try {
    const response = await axios.post(
      "http://localhost:3001/api/login",
      credentials
    );
    
    return response.data; 
  } catch (error) {
   

    throw error;
  }
};

export const signupUserAPI = async (userData) => {
  try {
    const response = await axios.post(
      " http://localhost:3001/api/signup",
      userData
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
