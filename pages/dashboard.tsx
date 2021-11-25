import Cookies from "next-cookies"
import { NextPage, NextPageContext } from "next"
import React from "react"
import NewStackForm from "../components/stacks/Form"
import StackTable from "../components/stacks/Table"
import { auth } from "./util"
import { getStacks } from "../api/stack/getAll"
import { Stack } from "../models/Stack"
import NewStackModal from "../components/stacks/NewModal"
import { Col, Container, Row } from "reactstrap"

type Props = {
  stacks: Stack[]
}

const DashBoard: NextPage<Props> = (props: Props) =>{
  return(
    <Container className="justify-content-center" m-10>
      <h2>Stacks</h2>
      <Row>
        <Col sm="12" md={{size:2, offset:11}}>
        <NewStackModal/>
        </Col>
      </Row>
      <Row>
        <Col>
          <StackTable stacks={props.stacks}/>
        </Col>
      </Row>
      </Container>
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