import axiosInstance from "./AxiosInstance";
import {emptyCart} from "./CartService";
import authHeader from "./AuthHeader";

export function postOrder(order)
{
    return axiosInstance.post("/orders", {
        order
    }, {headers: authHeader()}).then((response) => {
        console.log(order)
        emptyCart();
        return response.data;
    }, (error) => {
        console.log(error);
        return error.data;
    });
}
