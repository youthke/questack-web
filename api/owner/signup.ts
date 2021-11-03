import {Axios} from "../../api/config";
import stackSlice from "../../ducks/owner/slice";

type Payload = {
    name: string;
    mail: string;
    password: string;
}

export const signUp = (name: string , mail: string, password: string) =>{
    return async (dispatch : (value: any) => void) =>{
        try{
            dispatch(stackSlice.actions.signUp());
            const payload: Payload = {
                name: name,
                mail: mail,
                password: password
            };

            await Axios.post("/user", payload);
            dispatch(stackSlice.actions.postSuccess())
        }catch (e) {
            dispatch(stackSlice.actions.postError)
        }
    }

};