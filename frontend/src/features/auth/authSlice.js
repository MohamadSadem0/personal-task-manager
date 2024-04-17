

import { createSlice } from "@reduxjs/toolkit";
import { loginUserAPI, signupUserAPI } from "../../app/api/Userapi.jsx"; 

const authSlice = createSlice({

  name: "auth",
  initialState: { user: null, token: null },
  reducers: {
    setUser: (state, action) => {
      // state.user = action.payload.user;
      state.token = action.payload.token;
      localStorage.setItem("token", action.payload.token);

    },
    clearUser: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("token");
    },
  },
});

export const { setUser, clearUser } = authSlice.actions;

export const loginUser = (credentials) => async (dispatch) => {
  try {
    const response = await loginUserAPI(credentials);
    
   const { token } = response.data;

   localStorage.setItem("token", token);
   dispatch(setUser(response.data)); 

  } catch (error) {
  }
};

export const signupUser = (userData) => async (dispatch) => {
  try {
    const response = await signupUserAPI(userData);
    dispatch(setUser(response.data)); 
  } catch (error) {
 
  }
};

export default authSlice.reducer;
