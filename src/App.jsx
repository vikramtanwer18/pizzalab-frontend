
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Denied from './Pages/Denied'
import NotFound from './Pages/NotFound'
import Signup from './Pages/Auth/Signup'
import Login from './Pages/Auth/login'
import AddProduct from './Pages/Admin/AddProduct'
import Products from './Pages/Products/Products'
import ProductDetails from './Pages/Products/ProductDetails'
import CartDetails from './Pages/Cart/CartDetails'
function App() {


  return (
   <Routes>
    <Route path='/' element = {<Home/>}/>
    <Route path='/denied' element = {<Denied/>}/>
    <Route path='/auth/signup' element = {<Signup/>}/>
    <Route path='/auth/login' element = {<Login/>}/>
    <Route path='/add/product' element = {<AddProduct/>}/>
    <Route path = '/products' element = {<Products/>}/>
    <Route path = "/product/:productId" element = {<ProductDetails/>}/>c
    <Route path = "/cart" element = {<CartDetails/>}/>c
    <Route path='*' element = {<NotFound/>}/>
   </Routes>
  )
}

export default App
