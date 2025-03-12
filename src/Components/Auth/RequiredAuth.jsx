import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

function RequiredAuth() {
    const {isLoggedIn} = useSelector(state=>state.auth)

  return (
     <>
     {isLoggedIn ? <Outlet/> : <Navigate to='/auth/login' />}
     </>
  )
}

export default RequiredAuth