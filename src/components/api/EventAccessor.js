import axiosInstance from "./AxiosInstance";

export async function getEventByID(id)
{
    try {
        const response = await axiosInstance.get('/events/'+id);
        return response.data;

    } catch (error) {
        console.error(error);
        return null;
    }
}