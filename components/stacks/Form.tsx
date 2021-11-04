import { ErrorMessage } from "@hookform/error-message";
import React from "react"
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Button, Form, FormGroup, Input, Label } from "reactstrap"
import styled, { StyledFunction } from 'styled-components';
import { postStack } from "../../api/stack/create";
import { useOwnerState } from "../../ducks/owner/selectors";
import Cookies from 'js-cookie';
import ownerSlice from "../../ducks/owner/slice";
import { useRouter } from "next/router";


interface Props  {
  width?: string,
}

const Wrapper = styled.div<{width?: string}>`
  width: ${props => (props.width || '400px')}
`

type FormData = {
  name: string;
  description: string;
}

const Message = styled.div`
  color: red;
  font-size: 14px;
`


const NewStackForm: React.FC<Props> = (props) => {
  const {control, formState: {errors}, handleSubmit} = useForm();
  const router = useRouter()
  const state = useOwnerState().owner
  const dispatch = useDispatch()
  const onSubmit = async (values: FormData) => {
    const token = Cookies.get("questack_token")
    if(token){
      const f = postStack(values.name, values.description, token)
      f(dispatch) 
    }else{
      dispatch(ownerSlice.actions.postError())
      await router.push("/signin")
    }
  }

  return (
    <Wrapper width={props.width}>
      <Form onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
          <Label>Name</Label>
          <Controller
          rules={{ required: "スタック名を入力してください" }}
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
          <Label>Description</Label>
          <Controller
          control={control}
          name="description"
          render={({field}) => <Input {...field} />}
        />
        </FormGroup>
        <Button type={"submit"}>Submit</Button>
      </Form>  
    </Wrapper>
  )
}



export default NewStackForm