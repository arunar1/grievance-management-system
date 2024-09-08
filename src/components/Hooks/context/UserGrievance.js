import React, { useState } from 'react'

export const userGrievanceContext = React.createContext();

export const UserGrievance = (props) => {
  const [userGrievance,setUserGrievance]=useState("");
  const [refresh,setRefresh]=useState(0)
  return (
    <userGrievanceContext.Provider
      value={{ userGrievance, setUserGrievance,refresh,setRefresh }}
    >
        {props.children}
    </userGrievanceContext.Provider>
  );
}
