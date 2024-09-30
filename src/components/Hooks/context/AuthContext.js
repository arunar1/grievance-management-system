import React, { useState } from 'react'

export const AuthenticationContext = React.createContext()

export const AuthContext = (props) => {
    const [auth,setAuth]=useState();
  return (
    <AuthenticationContext.Provider value={{auth,setAuth}}>
        {props.children}
    </AuthenticationContext.Provider>
  )
}
