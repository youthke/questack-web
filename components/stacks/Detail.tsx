import React from "react";
import { useStackState } from "../../ducks/stack/selectors";
import Questions from "../questions/List";


const StackDetail: React.FC = () => {
  const state = useStackState().stack
  if(!state.stack) return <></>
  return (
    <>
      <h1>{state.stack.name}</h1>
      <h3>{state.stack.description}</h3>
      {
        state.stack.questions.length == 0 ?
        <h3>質問はありません</h3>:
        <Questions questions={state.stack.questions}/>
      }
    </>
  );
}

export default StackDetail
