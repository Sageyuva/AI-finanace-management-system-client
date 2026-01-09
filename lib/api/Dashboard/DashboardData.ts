import apiClient from "../axiosClient";
import { dashboardDataUrl } from "../../utils/urlConstants"

export const dashboardDataApi = async () => {
    const response = await apiClient.get(dashboardDataUrl)
    return response.data
}
