import axiosInstance from "./AxiosInstance";

export function getEventList(query)
{
    return axiosInstance.get(query).then((response) => {console.log(response); return response})
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
