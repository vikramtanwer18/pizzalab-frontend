import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../../Helpers/axiosInstance"
import toast from "react-hot-toast"

const initialState = {
    cartsData : []
}

export const productAddToCart = createAsyncThunk('/product/add',async(productId)=>{
    try {
       console.log('product id',productId)
        const response =  axiosInstance.post(`carts/add/${productId}`)
        toast.promise(response,{
            loading:'Wait for a time product is added from the cart....',
            error:"Something went wrong product is not added to cart",
            success:"product is successfully add to cart"
        })
        const apiResponse = await response;
      console.log('product added to cart',apiResponse)
        return apiResponse;
       } catch (error) {
        console.log(error)
       }
})

export const productRemoveFromCart = createAsyncThunk('/product/remove',async(productId)=>{
    try {
       
        const response =  axiosInstance.post(`carts/remove/${productId}`)
        toast.promise(response,{
            loading:'Wait for a time product remove from the cart....',
            error:"Something went wrong product is not remove from cart",
            success:"product is successfully remove from cart"
        })
        const apiResponse = await response;
        console.log('product remove from cart',apiResponse)
        return apiResponse;
       } catch (error) {
        console.log(error)
       }
})

export const getCartDetails = createAsyncThunk('/get/cart',async()=>{
    try {
        const response =  axiosInstance.get('/carts')
        toast.promise(response,{
            loading:'Wait for a time cart is fetching....',
            error:"Something went wrong cart is not fetching from cart",
            success:"cart is successfully fetched"
        })
        const apiResponse = await response;
        return apiResponse;
       } catch (error) {
        console.log(error)
       }
})


const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
     builder.addCase(getCartDetails.fulfilled,(state,action)=>{
      console.log('cart details frin extrabuilder',action?.payload?.data?.data?.items)
      state.cartsData = action?.payload?.data?.data?.items
     })
    }
})

export default cartSlice.reducer