import axiosInstance from "./AxiosInstance";

export function login()
{
    axiosInstance.get('/sanctum/csrf-cookie').then(response => {
        axiosInstance.post('/login').then()
    });
}