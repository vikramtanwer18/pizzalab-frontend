import { useState } from "react"
import LoginPresentaion from "./LoginPresentation"
import toast from "react-hot-toast"
import { useDispatch } from "react-redux"
import { login } from "../../Redux/Slices/AuthSlice"
import { useNavigate } from "react-router"

function LoginPage() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [loginData,setLoginData] = useState({
        email:'',
        password:''
    })


    function handleUserInput(e){
        const {name,value} = e.target 
        setLoginData({
            ...loginData,
            [name] : value
        })

    }

    async function handleFormSubmit(e){
        e.preventDefault()
        if(!loginData.email || !loginData.password){
            toast.error('Missing value from the form')
            return
        } else if(!loginData.email.includes('@')||!loginData.email.includes('.')){
            toast.error('Invalid email address')
            return
        }

        const apiResponse = await dispatch(login(loginData))
        console.log('api response in com',apiResponse)
        if(apiResponse.payload.data.success){
           navigate('/')
        }
    }

  return (
    <>
    <LoginPresentaion handleUserInput ={handleUserInput} handleFormSubmit ={handleFormSubmit}/>
    </>
  )
}

export default LoginPage