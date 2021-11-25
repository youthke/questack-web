import React from "react";
import { Card, Col, Row } from "reactstrap";
import SignUpForm from "../components/owners/SignUp";


const SignUpPage: React.FC<{}> = () => {
    return(
        <Row className="justify-content-center">
          <Col md="auto" className="ml-10">
          <Card body>
            <h2>Sign Up</h2>
            <SignUpForm/>
        　</Card>
          </Col>
        </Row>
    )
};





export default SignUpPage;