import React from "react";
import axios from "axios";
import Swal from "sweetalert2";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

const useAxiosSecure = () => {
  // intercept request
  // axiosInstance.interceptors.request.use((config) => {
  //   config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  //   return config;
  // });

  // intercept response
  axiosInstance.interceptors.response.use(
    (res) => res,
    (err) => {
      // console.log(err);
      // toast.error(err.response.data.message);
      Swal.fire({
        icon: "error",
        title: err.response.data.message,
        showConfirmButton: false,
        timer: 2000,
      });
    }
  );

  return axiosInstance;
};

export default useAxiosSecure;
