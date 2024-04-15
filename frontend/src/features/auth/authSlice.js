import { createSlice } from "@reduxjs/toolkit";

const authSlice=createSlice({
    name:'auth',
    initialState:{user:null ,token:null},
    reducers :{
        setCredenials:(state ,action)=>{
            const {user, accessToken}=action.payload
            state.user = user
            state.token = accessToken

        },
        logOut:(state,action)=>{
            state.user=null
            state.token=null
        }
    }
}
)

export const{setCredenials,logOut}=authSlice.actions
export default authSlice.reducer
export const selectCurrentUser=(state)=>state.authSlice=state.auth.user
export const selectCurrentToken=(state)=>state.authSlice=state.auth.token
