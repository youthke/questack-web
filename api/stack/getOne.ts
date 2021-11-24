import {Stack} from "../../models/Stack"
import {Axios} from "./../config";

type response = {
    stack: Stack;
    message: string;
};

export const getStack = async (stackID: string): Promise<response> =>{
    const resp = await Axios.get(`/stacks/${stackID}`);
    return resp.data;
};