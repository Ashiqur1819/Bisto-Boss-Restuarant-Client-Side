import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
import { useEffect } from "react";

const axiosSecure = axios.create({
  baseURL: "http://localhost:3000",
});
const useAxiosSecure = () => {
  const navigate = useNavigate()
  const {logOut} = useAuth()
  // request interceptor
  useEffect(() => {
     axiosSecure.interceptors.request.use(
       (config) => {
         const token = localStorage.getItem("access-token");
         config.headers.authorization = `Bearer ${token}`;
         return config;
       },
       (error) => {
         return Promise.reject(error);
       }
     );

     // respons interceptors
     axiosSecure.interceptors.response.use(
       (response) => {
         return response;
       },
       async (error) => {
         const status = error?.response?.status;
         if (status === 401 || status === 403) {
           await logOut();
           console.log("Logout");
           navigate("/");
         }
         return Promise.reject(error);
       }
     );
  }, [])
    return axiosSecure
};

export default useAxiosSecure;