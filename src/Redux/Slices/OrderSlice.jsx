import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../../Helpers/axiosInstance"
import toast from "react-hot-toast"

const initialState = {
    orders:null
}

export const createOrder = createAsyncThunk('order/create',async(data)=>{
    try {
        console.log('order is data',data)
        const response = axiosInstance.post('/orders',data)
        toast.promise(response,{
            loading:'Wait for a time order is createing....',
            error:"Something went wrong order is not created",
            success:"order is successfully created"
        })
        const apiResponse = await response;
        return apiResponse;
       } catch (error) {
        console.log(error)
       }

})

const orderSlice = createSlice({
    name:'order',
    initialState,
    reducers:{ },
    extraReducers: (builder) => {
        builder.addCase(createOrder.fulfilled, (state, action) => {
            console.log('order is',action?.payload)
            state.orders = action?.payload?.data;
        });
    }
})

export default orderSlice.reducer;