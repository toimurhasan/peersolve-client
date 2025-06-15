import React from "react";
import axios from "axios";
import { toast } from "react-toastify";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

const useAxiosSecure = () => {
  // intercept request
  axiosInstance.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
    return config;
  });

  // intercept response
  axiosInstance.interceptors.response.use(
    (res) => res,
    (err) => {
      toast.error(err.response.data.message);
    }
  );

  return axiosInstance;
};

export default useAxiosSecure;
