import React, { useState } from 'react'
export const allUserContext = React.createContext()

export const Alluser = (props) => {

    const [allusers,setAllusers]=useState();
  return (
    <allUserContext.Provider value={{allusers,setAllusers}}>
        {props.children}
    </allUserContext.Provider>
  )
}
