import axios from "axios";
export const tokenKey = "token";

// Create an instance of Axios
const instanseAxios = axios.create();

// Add a request interceptor
instanseAxios.interceptors.request.use(
  (config) => {
    // Retrieve the token from local storage or any other source
    const token = localStorage.getItem(tokenKey);

    // If the token exists, set it as a bearer token in the request headers
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

export default instanseAxios;
