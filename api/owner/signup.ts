import {Axios} from "../../api/config";
import ownerSlice from "../../ducks/owner/slice";

type Payload = {
    name: string;
    mail: string;
    password: string;
}

export const signUp = (name: string , mail: string, password: string) =>{
    return async (dispatch : (value: any) => void) =>{
        try{
            dispatch(ownerSlice.actions.signUp());
            const payload: Payload = {
                name: name,
                mail: mail,
                password: password
            };

            await Axios.post("/user", payload);
            dispatch(ownerSlice.actions.postSuccess())
        }catch (e) {
            dispatch(ownerSlice.actions.postError)
        }
    }

};