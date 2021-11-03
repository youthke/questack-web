import React from "react"
import { useForm } from "react-hook-form";
import { Button, Form, FormGroup, Input, Label } from "reactstrap"
import styled, { StyledFunction } from 'styled-components';


interface Props  {
  width?: string,
}

const Wrapper = styled.div<{width?: string}>`
  width: ${props => (props.width || '400px')}
`

const NewStackForm: React.FC<Props> = (props) => {
  const {register} = useForm();
  return (
    <Wrapper width={props.width}>
      <Form>
        <FormGroup>
          <Label>Stack Name</Label>
          <Input {...register("name", {
            required: true
          })}/>
        </FormGroup>
        <FormGroup>
          <Label>Description</Label>
          <Input type="textarea" {...register("name")}/>
        </FormGroup>
        <Button>Submit</Button>
      </Form>  
    </Wrapper>
  )
}



export default NewStackForm