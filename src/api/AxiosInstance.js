import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000/api/',
    timeout: 1000,
    headers: {'Accept': 'application/json'}
});

axiosInstance.defaults.withCredentials = true;

export default axiosInstance;