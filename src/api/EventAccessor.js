import axiosInstance from "./AxiosInstance";

export async function getEventList(query)
{
    try {
        const response = await axiosInstance.get(query);
        return await response.data.data;

    } catch (error) {
        console.error(error);
        return null;
    }
}

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
