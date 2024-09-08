import React, { useState } from 'react'

export const userGrievanceContext = React.createContext();

export const UserGrievance = (props) => {
  const [userGrievance,setUserGrievance]=useState("");
  return (
    <userGrievanceContext.Provider
      value={{ userGrievance, setUserGrievance }}
    >
        {props.children}
    </userGrievanceContext.Provider>
  );
}
