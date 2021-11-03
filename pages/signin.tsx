import {NextPage} from "next";
import React from "react";
import Router from "next/router";
import { useOwnerState } from "../ducks/owner/selectors";
import SignIn from "../components/owners/SignIn";

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
        <div>
            <SignIn/>
        </div>
    );
};



export default SignInPage;