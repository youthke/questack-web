import React from "react"
import { useForm, Controller } from "react-hook-form";
import NewStackForm from "../../components/stacks/Form";


const NewStackPage: React.FC = () =>{  

  return (
    <>
      <NewStackForm width={"300px"}/>
    </>
  )
}

export default NewStackPage;