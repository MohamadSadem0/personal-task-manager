import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { setCredenials,logOut } from '../../features/auth/authSlice'


const baseQuery=fetchBaseQuery({
    baseUrl:'http://localhost:8000',
    credentials:'include',
    prepareHeaders:(headers,{ getState })=>{
        const token=getState().auth.token
        if(token) {
            headers.set("authorization",`Bearer${token}`)
        }
        return headers
    }
})