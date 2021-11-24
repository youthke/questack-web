import { Axios } from "./../config";
import { Stack } from "../../models/Stack";


type response = {
    stacks: Stack[];
    message: string;
};

export const getStacks = async (token: string): Promise<response> =>{
    const resp = await Axios.get("/stacks",{
        headers: {
            Authorization: token
        }
    });
    return resp.data;
};