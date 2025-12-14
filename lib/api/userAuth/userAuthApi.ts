import { signInUrl, signUpUrl, verifuUrl } from "@/lib/utils/urlConstants";
import apiClient from "../axiosClient";
import { SignupInterface , SigninInterface } from "@/lib/utils/types";

export const signUpApi = async (SignupInterface:SignupInterface)=> {
    try {
        const response = await apiClient.post(signUpUrl,SignupInterface)
        return response
    } catch (error) {
        return error
    }
}

export const verityAccount = async(userId : string , token : string) => {
    try {
        const response = await apiClient.get(verifuUrl(userId,token))
        return response
    } catch (error) {
        return error
    }
}

export const signInApi = async(SigninInterface:SigninInterface) => {
try {
    const response = await apiClient.post(signInUrl,SigninInterface)
    return response
} catch (error) {
    return error
}
}