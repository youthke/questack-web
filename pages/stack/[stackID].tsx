import {NextPage, NextPageContext} from "next";
import React from "react";
import { useDispatch } from "react-redux";
import { getStack } from "../../api/stack/getOne";
import StackDetail from "../../components/stacks/Detail";
import stackSlice from "../../ducks/stack/slice";
import { Stack } from "../../models/Stack";

type Props = {
    stack: Stack
}

const QuestionsPage: NextPage<Props> = (props:Props) => {
  const dispatch = useDispatch()
  dispatch(stackSlice.actions.setStack(props.stack))
    return (
        <div>
            <StackDetail/>
        </div>
    )
};

QuestionsPage.getInitialProps = async (ctx:NextPageContext) =>{
    const {stackID} = ctx.query;
    const result = await getStack(stackID as string);
    return {
        stack: result.stack
    }
};

export default QuestionsPage;