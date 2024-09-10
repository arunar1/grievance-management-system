import React, { useState } from 'react'

export const supervisorGrievanceContext = React.createContext()


export const SupervisorGrievance = (props) => {

    const [supervisorGrievance,setSupervisorGrievance]=useState();
  return (
    <supervisorGrievanceContext.Provider value={{supervisorGrievance,setSupervisorGrievance}}>
        {props.children}
    </supervisorGrievanceContext.Provider>
  )
}
