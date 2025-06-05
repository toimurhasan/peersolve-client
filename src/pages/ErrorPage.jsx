import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="flex italic flex-col justify-center items-center h-[calc(100vh-349px)] text-center">
      <h1 className="text-4xl">404</h1>
      <p className="font-light">Page Not Found</p>
      <Link className=" text-blue-600 underline" to="/">
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
