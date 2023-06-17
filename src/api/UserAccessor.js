import axiosInstance from "./AxiosInstance";
import authHeader from "./AuthHeader";

export async function getUser() {
  try {
    const response = await axiosInstance.get("/users", { headers: authHeader() });
    return await response.data;

  }
  catch (error)
  {
    console.error(error);
    return null;
  }
}

export function patchUser(firstname, lastname, email, skinType) {
    return axiosInstance.patch("/users", {
      firstname,
      lastname,
      email,
      skinType
    }, { headers: authHeader() })
      .then(
          (response) => {return response.data});
}