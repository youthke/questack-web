import {Axios} from "../../api/config";
import Cookies from "js-cookie";
import ownerSlice from "../../ducks/owner/slice";

type Payload = {
    mail: string;
    password: string;
}

type response = {
    token: string;
    message: string;
};

export const signIn = (mail: string, password: string) => {
    return async (dispatch: (value: any) => void) =>{
        try {
            dispatch(ownerSlice.actions.signIn());
            const payload: Payload = {
                mail: mail,
                password: password
            };
            const resp = await Axios.post<response>("/sign-in", payload);
            const time = new Date();
            const t = time.getTime();
            time.setTime(t + 1000 * 60 * 60);
            Cookies.remove("questack_token");
            Cookies.set("questack_token", resp.data.token, { expires: time });
            dispatch(ownerSlice.actions.signInSuccess())
        }catch(e) {
            dispatch(ownerSlice.actions.signInError())
        }
    }
};