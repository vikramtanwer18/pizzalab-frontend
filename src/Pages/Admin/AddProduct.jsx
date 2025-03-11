import { useState } from "react"
import AddProductPresentaion from "./AddProductPresentation";
import { useDispatch } from "react-redux";
import { createProduct } from "../../Redux/Slices/ProductSlice";

function AddProduct() {

       const dispatch = useDispatch()
        const [addProduct,setAddProduct] = useState({
            productName:'',
            description:'',
            price:0,
            quantity:0,
            category:'veg',
            productImage:[]
        })

        function handleUserInput(e){
          const {name,value,type,files} = e.target;
            setAddProduct({
                ...addProduct,
                 [name]: type === "file"? files[0]:value 
            })
        }
       async function handleFormSubmit(e){
            e.preventDefault()
           const apiResponse = await dispatch(createProduct(addProduct))
           console.log(apiResponse?.payload?.data?.data?.success)
           if(apiResponse?.payload?.data?.data?.success){
            addProduct.productName = ""
            addProduct.description =''
            addProduct.price =0,
            addProduct.quantity =0,
            addProduct.category ='veg',
            addProduct.productImage =[]
           }
        }

  return (
    <>
    <AddProductPresentaion addProduct={addProduct} handleFormSubmit = {handleFormSubmit} handleUserInput ={handleUserInput}/>
    </>
  )
}

export default AddProduct;