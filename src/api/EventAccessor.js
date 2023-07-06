import axiosInstance from "./AxiosInstance";

export function getEventList(query)
{
    return axiosInstance.get(query).then(
        (response) =>
        {
            return response;
        })
}

export async function getEventByID(id)
{   return axiosInstance.get('/events/'+id).then(
        (response) =>
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

export function calculateAverageRating(event)
{
    if(event.reviews !== undefined && event.reviews !== null && event.reviews.length > 0)
    {
        let array = event.reviews;

        let result = 0;
        for(let i = 0; i < array.length; i++)
        {
            if(array[i].value !== undefined && array[i].value !== null) result += array[i].value;
        }
        result = result/event.reviews.length;
        return result.toFixed(1);
    }
    return 0.0.toFixed(1);
}
