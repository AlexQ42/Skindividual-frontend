import axiosInstance from "./AxiosInstance";
import {emptyCart} from "./CartService";

export function postOrder(order)
{
    return axiosInstance.post("/users", order).then((response) => {
        emptyCart();
        return response.data;
    }, (error) => {
        console.log(error);
        return error.data;
    });
}
