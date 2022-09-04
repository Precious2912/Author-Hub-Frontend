import React from 'react'
import {useLocation, Navigate, Outlet, Route} from 'react-router-dom'
import useAuth from '../hooks/UseAuth'

function  ProtectedRoute({children}) {
     const location = useLocation()
    // const {loggedIn} = useAuth();
    const isAuthenticated = localStorage.getItem("authenticated")
    
  // return loggedIn ? (
  //   <Outlet /> 
  // ) : (
  //   <Navigate to='login' state={{from: location}} replace/>
  // )

  if(!isAuthenticated){
    return   <Navigate to='/login' state={{from: location}} replace/>
  }

  return children
   

  // return (
  //   <Route
  //   {...restOfProps}
  //   render={(props) => 
  //     isAuthenticated ? <Component {...props} /> : <Navigate to='login'/>
  //   }

  //   />
  // )
    
}

export default ProtectedRoute