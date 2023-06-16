import axiosInstance from "./AxiosInstance";
import authHeader from "./AuthHeader";

const register = (name, email, password) => {
  return axiosInstance.post("/register", {
    name,
    email,
    password,
  });
};

const login = (email, password) => {
  return axiosInstance.post("/login", {
        email,
        password,
      })
    .then((response) => {
      //einfaches debug
      localStorage.setItem("user", JSON.stringify(response.data));

      return response.data;
    });
};

const logout = () => {
  axiosInstance.post("/logout", null, { headers: authHeader() });
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
    console.log(localStorage.getItem("user"));
  return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default AuthService;