import { signInUrl, signUpUrl, verifuUrl } from "@/lib/utils/urlConstants";
import apiClient from "../axiosClient";
import { SignupInterface , SigninInterface ,SignInResponse } from "@/lib/utils/types";

export const signUpApi = async (SignupInterface:SignupInterface)=> {
        const response = await apiClient.post(signUpUrl,SignupInterface)
        return response.data
}

export const verityAccount = async(userId : string , token : string) => {
        const response = await apiClient.get(verifuUrl(userId,token))
        return response.data
}

export const signInApi = async(SigninInterface:SigninInterface) => {
    const response = await apiClient.post(signInUrl,SigninInterface)
    return response
}