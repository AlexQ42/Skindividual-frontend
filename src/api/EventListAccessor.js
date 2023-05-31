import axiosInstance from "./AxiosInstance";

export async function getEventList(query)
{
    try {
        const response = await axiosInstance.get(query);
        await console.log(response.data);
        return await response.data;

    } catch (error) {
        console.error(error);
        return null;
    }
}
