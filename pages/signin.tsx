import {NextPage} from "next";
import React from "react";
import Router from "next/router";
import { useOwnerState } from "../ducks/owner/selectors";
import SignIn from "../components/owners/SignIn";
import { Card, Col, Row } from "reactstrap";

type Props = {}

const SignInPage: NextPage<Props> = () => {
  const {signInSuccess} = useOwnerState().owner
    React.useEffect(() =>{
        const func = async () => {
            if (signInSuccess){
              await Router.push("/dashboard");
            }
        };
        func()
    },[signInSuccess]);
    return(
        <Row className="justify-content-center">
          <Col md="auto" className="ml-10">
          <Card body>
            <h2>Sign in</h2>
            <SignIn/>
        　</Card>
          </Col>
        </Row>
    );
};



export default SignInPage;