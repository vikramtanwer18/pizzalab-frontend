
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Denied from './Pages/Denied'
import NotFound from './Pages/NotFound'
import Signup from './Pages/Auth/Signup'
import Login from './Pages/Auth/login'
import AddProduct from './Pages/Admin/AddProduct'
import ProductDetails from './Pages/Products/ProductDetails'
import CartDetails from './Pages/Cart/CartDetails'
import ProductOrder from './Pages/Order/ProductOrder'
import OrderSuccess from './Pages/Order/OrderSuccess'
import RequiredAuth from './Components/Auth/RequiredAuth'
import AllProducts from './Pages/AllProducts'
function App() {
  return (
   <Routes>
   
    <Route path='/' element = {<Home/>}/>
    <Route element={<RequiredAuth/>}>
    <Route path='/add/product' element = {<AddProduct/>}/>
    <Route path = '/products' element = {<AllProducts/>}/>
    <Route path = "/product/:productId" element = {<ProductDetails/>}/>
    <Route path = "/cart" element = {<CartDetails/>}/>
    <Route path = "/order" element = {<ProductOrder/>}/>
    <Route path = "/order/success" element = {<OrderSuccess/>}/>
    </Route>
    <Route path='/denied' element = {<Denied/>}/>
    <Route path='/auth/signup' element = {<Signup/>}/>
    <Route path='/auth/login' element = {<Login/>}/>
    <Route path='*' element = {<NotFound/>}/>
   </Routes>
  )
}

export default App
