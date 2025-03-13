import Footer from '../Components/Footer';
import Pizzalogo from '../assets/Images/pizza1.png';
import Logout from '../Pages/Auth/Logout';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import {  useSelector } from 'react-redux';

import CartIcon from '../assets/Images/cart2.png';
// import { getCartDetails } from '../Redux/Slices/CartSlice';
// import { logout } from '../Redux/Slices/AuthSlice';
// import { useEffect } from 'react';


function Layout({ children }) {
    const navigate = useNavigate()
    const {role} = useSelector(state=>state.auth)
    const isLoggedIn =  useSelector((state)=> state.auth.isLoggedIn)
    const {cartsData} = useSelector((state)=>state.cart)

    // const dispatch = useDispatch()
    // const fetchCartDetails = async()=>{
    //     const response = await dispatch(getCartDetails())
    //     if(response.payload.unAuthorized){
    //         console.log("in the layout")
    //         await dispatch(logout())
    //     }
    // }
    // useEffect(()=>{
    //     if(isLoggedIn){
    //     fetchCartDetails()
    //     }
    // },[])

    return (
        <div>

            <nav className="flex items-center justify-around h-16 text-[#6B7280] font-mono border-none shadow-md">

                <div className="flex items-center justify-center  cursor-pointer"
                 onClick={()=>navigate('/')}>
                    <p>PizzaLab</p>
                    <img src={Pizzalogo} alt="Pizza logo" className='h-10' />
                </div>

                <div className='hidden md:block'>
                    <ul className='flex gap-4 '>

                        <li className='hover:text-[#FF9110]'>
                            { ' ' }
                            <Link to={"/"}>Home</Link>
                        </li>

                        <li className='hover:text-[#FF9110]'>
                            { ' ' }
                            <Link to={"/"}>About</Link>
                        </li>

                        {/* <li className='hover:text-[#FF9110]'>
                            { ' ' }
                            <Link to={"/"}>Services</Link>
                        </li> */}
                        <li className='hover:text-[#FF9110]'>
                            { ' ' }
                            <Link to = {'/products'}className='cursor-pointer' lin>AllProducts {' '}</Link>
                        </li> 

                        {
                            role === "ADMIN" && 
                            (<li className='hover:text-[#FF9110]'>
                                { ' ' }
                                <Link to = {'/add/product'}className='cursor-pointer' lin>AddPoduct{' '}</Link>
                            </li> )
                        }
                    </ul>

                </div>
                 <Logout/>


                {isLoggedIn && (
                            <Link to={'/cart'}>
                                <li className='inline'>
                                    <img src={CartIcon} className='w-8 h-8 inline' />
                                    <p className='text-white font-semibold inline bg-red-600 rounded-full p-1.5'>{cartsData?.length}</p>
                                </li>
                            </Link>
                            
                        )}
            </nav>

                {children}

            <Footer />
        </div>  
    )
}

export default Layout;