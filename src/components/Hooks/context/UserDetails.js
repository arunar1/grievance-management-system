import React, { useState } from 'react'
export const userDetailsContext = React.createContext();


export const UserDetails = (props) => {
    const [userDetail,setUserDetails]=useState();
  return (
    <userDetailsContext.Provider value={{userDetail,setUserDetails}}>
        {props.children}
    </userDetailsContext.Provider>
  )
}
