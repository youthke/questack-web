import React from "react"
import { Card, CardBody, CardSubtitle, CardText, CardTitle, Col, Row } from "reactstrap"
import { Question } from "../../models/Question"

type Props = {
  questions:　Question[]
}
const Questions: React.FC<Props> = (props) => {
  return (
    <>
      {props.questions.map((quesion: Question) => {
        return (
          <Row className="justify-content-center">
            <Col md="5">
              <Card key={quesion.id}>
              <CardBody>
                <CardTitle  tag="h1">{quesion.title}</CardTitle>
                <CardSubtitle>作成者: {quesion.author ? quesion.author : "匿名"}</CardSubtitle>
                <CardText>{quesion.content}</CardText>
              </CardBody>
              </Card>
          </Col>
          </Row>
        )
      })}
    </>
  )
}

export default Questions