import React from "react"
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Button, Form, FormGroup, Input, Label } from "reactstrap"
import styled from "styled-components";
import { signUp } from "../../api/owner/signup";
import { ErrorMessage } from '@hookform/error-message';

interface Props {
  width?: string
}

interface FormData {
  name: string,
  mail: string,
  password: string, 
}

const Message = styled.div`
  color: red;
  font-size: 14px;
`



const Wrapper = styled.div<{width?: string}>`
  width: ${props => (props.width || '400px')}
`

const SignUpForm: React.FC<Props> = (props) => {
  const {handleSubmit, control, formState: {errors} } = useForm();
  const dispatch = useDispatch()
  const onSubmit = async (values: FormData) => {
    console.log(values)
    const f = signUp(values.name, values.mail, values.password)
    f(dispatch)
  }
  return (
    <Wrapper width={props.width}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
            <Label>Name</Label>
          <Controller
          rules={{ required: "名前を入力してください" }}
          control={control}
          name="name"
          render={({field}) => <Input {...field} />}
        />
        <ErrorMessage
        errors={errors}
        name="name"
        render={({message}) => <Message>{message}</Message>}
      />
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Controller
          rules={{ required: "メールアドレスを入力してください" }}
          control={control}
          name="mail"
          render={({field}) => <Input {...field} />}
        />
        <ErrorMessage
        errors={errors}
        name="mail"
        render={({message}) => <Message>{message}</Message>}
      />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Controller
          rules={{ required: "パスワードを入力してください" }}
          control={control}
          name="password"
          render={({field}) => <Input type="password" {...field} />}
        />
        <ErrorMessage
        errors={errors}
        name="password"
        render={({message}) => <Message>{message}</Message>}
      />
        </FormGroup>
        <FormGroup>
          <Button type="submit">Submit</Button>
        </FormGroup>
      </Form>
    </Wrapper>
  )
}

export default SignUpForm