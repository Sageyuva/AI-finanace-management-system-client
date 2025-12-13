import { signUpUrl } from "@/lib/utils/urlConstants";
import apiClient from "../axiosClient";
import { SignupInterface } from "@/lib/utils/types";

export const signUpApi = (SignupInterface:SignupInterface)=> {
    try {
        const response = apiClient.post(signUpUrl,SignupInterface)
        return response
    } catch (error) {
        return error
    }
}
