
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../Helpers/axiosInstance";
import toast from "react-hot-toast";

const initialState = {
    isLoggedIn: localStorage.getItem('isLoggedIn') === 'true',
    role: localStorage.getItem('role') || '',
    data: localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : {},
};

export const createAccount = createAsyncThunk('/auth/createAccount',async(data)=>{
   try {
    const response = axiosInstance.post('/users/register',data)
    console.log('response',response)
    toast.promise(response,{
        success: (resolvedResponse)=>{
          return  resolvedResponse?.data?.message
        },
        loading:'Wait for a minute user is register...',
        error:"User can't registerd Something went wrong"
    })
    const apiResponse = await response;
    return apiResponse 
   } catch (error) {
    console.log(error)
   }
})


export const login = createAsyncThunk('/auth/login',async(data)=>{
    try {
        const response = axiosInstance.post('/users/auth/login',data)
        console.log('incoming data form thung',data)
        toast.promise(response,{
            success: (resolvedResponse)=>{
                return  resolvedResponse?.data?.message
              },
              loading:'Wait for a minute user is regestering...',
              error:"User can't login Something went wrong"   
        })
        const apiResponse = await response;
        return apiResponse 
    } catch (error) {
        console.log(error)
    }
})


export const logout = createAsyncThunk('/auth/logout',async()=>{
    try {
        const response = axiosInstance.post('/users/auth/logout')
        toast.promise(response,{
            success: (resolvedResponse)=>{
                return  resolvedResponse?.data?.message
              },
              loading:'Wait for a minute user is logout...',
              error:"User can't logout Something went wrong"   
        })
       
    } catch (error) {
        console.log(error)
    }
})

const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers:(builder)=>{
        builder.
            addCase(login.fulfilled,(state,action)=>{
                const userData = action.payload?.data?.data || {};
                state.isLoggedIn = true;
                state.role = userData.userRole || '';
                state.data = userData.userData || {};
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('role', userData.userRole || '');
                localStorage.setItem('data', JSON.stringify(userData.userData || {}));
        })
        .addCase(logout.fulfilled,(state)=>{
                      
            localStorage.setItem('isLoggedIn',false);
            localStorage.setItem('role','');
            localStorage.setItem('data',JSON.stringify({}))
            state.isLoggedIn  = false;
            state.role = '';
            state.data = {};
        })
    }
   
});

export default AuthSlice.reducer;