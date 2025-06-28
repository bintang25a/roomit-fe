import axios from "axios";

const API = axios.create({
   // baseURL: "http://127.0.0.1:5000/",
   baseURL: "https://7418fqfm-5000.asse.devtunnels.ms/",
   withCredentials: true,
});

API.interceptors.response.use(
   (response) => response,
   (error) => {
      if (error.response?.status === 401) {
         localStorage.removeItem("token");
         localStorage.removeItem("user");
         window.location.href = "/login";
      }
      return Promise.reject(error);
   }
);

export default API;
