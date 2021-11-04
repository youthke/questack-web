import React from "react"
import NewStackForm from "../components/stacks/Form"
import StackTable from "../components/stacks/Table"

const DashBoard: React.FC<{}> = () =>{
  return(
    <>
      <NewStackForm/>
      <StackTable/>
    </>
  )
}

export default DashBoard