import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../Helpers/axiosInstance";
import toast from "react-hot-toast";

const initialState = {
    productData : []
}
export const createProduct = createAsyncThunk("/product/create",async(data)=>{
    try {
        const response = axiosInstance.post('/products/register',data,{
            headers: {
                "Content-Type": "multipart/form-data",
              },
        })
        toast.promise(response,{
            success: (resolvedResponse)=>{
              return  resolvedResponse?.data?.message
            },
            loading:'Wait for a minute proudct is create...',
            error:"product can't registerd Something went wrong"
        })
        const apiResponse = await response;
        return apiResponse 
    } catch (error) {
        toast.error("product can't registerd Something went wrong",error)
    }
}) 

export const getAllProducts = createAsyncThunk('/get/products',async()=>{
   
    try {
     const products = axiosInstance.get('/products')
     toast.promise(products,{
         loading:'Wait for a time products is fetching....',
         error:"Something went wrong products is not fetching",
         success:"products is successfully fetched"
     })
     const apiResponse = await products;
     return apiResponse;
    } catch (error) {
        toast.error("Please login to view cart")
     console.log(error)
    }
 })
 
 
 export const getProductDetails = createAsyncThunk('/get/product',async(productId)=>{
     try {
        
      const product = axiosInstance.get(`products/get/${productId}`)
      toast.promise(product,{
          loading:'Wait for a time product is fetching....',
          error:"Something went wrong product is not fetching",
          success:"product is successfully fetched"
      })
      const apiResponse = await product;
 
      return apiResponse;
     } catch (error) {
      console.log(error)
     }
  })

const ProductSlice = createSlice({
    name:"product",
    initialState,
    reducers:{},
    extraReducers: (builder)=>{
        builder.addCase(getAllProducts.fulfilled,(state,action)=>{
            state.productData = action.payload?.data?.data
        })
    }
})

export default ProductSlice.reducer