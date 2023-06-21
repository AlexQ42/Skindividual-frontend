import axiosInstance from "./AxiosInstance";

export function getEventList(query)
{
    return axiosInstance.get(query).then((response) => {console.log(response); return response})
}

export async function getEventByID(id)
{   return axiosInstance.get('/events/'+id).then((response) =>
        {
            return response.data;
        },
        (error) =>
        {
            console.error(error);
            return null;
        }
    )
}
