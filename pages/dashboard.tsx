import Cookies from "next-cookies"
import { NextPage, NextPageContext } from "next"
import React from "react"
import NewStackForm from "../components/stacks/Form"
import StackTable from "../components/stacks/Table"
import { auth } from "./util"
import { getStacks } from "../api/stack/getAll"
import { Stack } from "../models/Stack"

type Props = {
  stacks: Stack[]
}

const DashBoard: NextPage<Props> = (props: Props) =>{
  return(
    <>
      <NewStackForm/>
      <StackTable stacks={props.stacks}/>
    </>
  )
}

DashBoard.getInitialProps = async (ctx:NextPageContext) => {
  await auth(ctx)
  const {questack_token} = Cookies(ctx) as Record<string,string>
  const result = await getStacks(questack_token)
  return {
    stacks: result.stacks
  }
}

export default DashBoard