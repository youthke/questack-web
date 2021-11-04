import stackSlice from '../../ducks/stack/slice';
import {Axios} from './../config'


type Payload = {
    name: string;
    description: string;
}

export const postStack = (name: string, description:string, token: string) => {
    return async (dispatch: (value: any) => void) =>{
        try{
        const payload: Payload = {
            name: name,
            description: description
        };
            await Axios.post("/stack", payload,{
                headers: {
                    Authorization: token
                }
        });
        dispatch(stackSlice.actions.postSuccess());
        }catch (e) {
            dispatch(stackSlice.actions.postError());
        }
    };
};