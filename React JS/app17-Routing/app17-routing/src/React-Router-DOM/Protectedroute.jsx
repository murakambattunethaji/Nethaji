import React from 'react'
import { Navigate } from 'react-router-dom'

const Protectedroute = ({ children }) => {

  const islogdin = false 
  return islogdin ? children : <Navigate to={'/login'} />

}

export default Protectedroute
