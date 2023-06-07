import axiosInstance from "./AxiosInstance";

export async function getEventList(query)
{
    try {
        const response = await axiosInstance.get(query);
        return await response.data;

    } catch (error) {
        console.error(error);
        return null;
    }
}
