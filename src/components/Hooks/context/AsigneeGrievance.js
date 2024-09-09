import React, { useState } from 'react'

export const assigneeGrievanceContext = React.createContext();

export const AsigneeGrievance = (props) => {
    const [assigneeGrievance,setAssigneeGrievance]=useState();

  return (
    <assigneeGrievanceContext.Provider value={{assigneeGrievance,setAssigneeGrievance}}>
        {props.children}
    </assigneeGrievanceContext.Provider>
  )
}
