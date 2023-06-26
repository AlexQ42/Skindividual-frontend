import axiosInstance from "./AxiosInstance";
import authHeader from "./AuthHeader";

export async function getUser() {
  return axiosInstance.get("/users", {headers: authHeader()})
      .then(
      (response) => {        console.log(response.data); return response.data}, (error) => {
        console.error(error);
        return null;
      });
}

export function patchUser(firstname, lastname, email, skinType) {
    console.log(firstname, lastname, email, skinType);
    return axiosInstance.patch("/users", {
      firstname,
      lastname,
      email,
      skinType
    }, { headers: authHeader() })
      .then(
          (response) => {return response.data});
}