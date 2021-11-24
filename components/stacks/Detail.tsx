import React from "react";
import { Col, Container, Row } from "reactstrap";
import { useStackState } from "../../ducks/stack/selectors";
import Questions from "../questions/List";


const StackDetail: React.FC = () => {
  const state = useStackState().stack
  if(!state.stack) return <></>
  return (
    <Container className="justify-content-center">
      <Row  className="justify-content-center">
        <Col md="auto">
          <h1>{state.stack.name}</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>{state.stack.description}</h3>
        </Col>
      </Row>
      {
        state.stack.questions.length == 0 ?
        <h3>質問はありません</h3>:
        <Questions questions={state.stack.questions}/>
      }
    </Container>
  );
}

export default StackDetail
