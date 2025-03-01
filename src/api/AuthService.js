import axiosInstance from "./AxiosInstance";
import authHeader from "./AuthHeader";

const register = (firstname, lastname, name, email, password, skinType) => {
  return axiosInstance.post("/users", {
      firstname,
      lastname,
      name,
      email,
      password,
      skinType
  }).then((response) => {
      localStorage.setItem("user", JSON.stringify(response.data));
      return response.data;
  });
};

const login = (email, password) => {
  return axiosInstance.post("/login", {
        email,
        password,
      })
    .then((response) => {
      localStorage.setItem("user", JSON.stringify(response.data));
      return response.data;
    });
};

const logout = () => {
  axiosInstance.post("/logout", null, { headers: authHeader() });
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default AuthService;