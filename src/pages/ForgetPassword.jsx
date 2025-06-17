import React, { use } from "react";
import { Link, useNavigate } from "react-router";
import AuthContext from "../contexts/AuthContext";
import Swal from "sweetalert2";

const ForgetPassword = () => {
  const { forgetPassword } = use(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    forgetPassword(email)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Please check your email",
          showConfirmButton: false,
          timer: 2000,
        });
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        Swal.fire({
          icon: "error",
          title: errorCode,
          showConfirmButton: false,
          timer: 2000,
        });
      });
  };
  return (
    <div className="flex justify-center items-center py-16 px-4">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-4xl text-center text-transparent bg-clip-text pb-1 bg-gradient-to-r from-blue-600 via-orange-400 to-pink-400 font-bold">
            Reset Password
          </h1>
          <form onSubmit={handleSubmit} className="fieldset">
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input w-full focus:outline-transparent focus:border-gray-400 focus:shadow-xl"
              placeholder="Email"
            />

            <button
              type="submit"
              className="btn hover:bg-gradient-to-l group  bg-gradient-to-r from-blue-500 hover:shadow-lg   via-orange-400 to-pink-500 rounded-full  mt-4"
            >
              <span className="group-hover:-translate-y-0.5 transition">Submit</span>
            </button>
          </form>
          <div>
            <p className="flex justify-center gap-1">
              <span>New here?</span>
              <Link className="link text-blue-600" to="/register">
                Create a new account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
