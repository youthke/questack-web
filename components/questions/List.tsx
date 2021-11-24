import React from "react"
import { Card, CardBody, CardText, CardTitle } from "reactstrap"
import { Question } from "../../models/Question"

type Props = {
  questions:　Question[]
}
const Questions: React.FC<Props> = (props) => {
  return (
    <>
      {props.questions.map((quesion: Question) => {
        return (
          <Card key={quesion.id}>
            <CardBody>
              <CardTitle>{quesion.title}</CardTitle>
              <CardText>{quesion.content}</CardText>
            </CardBody>
          </Card>
        )
      })}
    </>
  )
}

export default Questions