import React from "react";
import { Link } from "react-router";

const ForgetPassword = () => {
  return (
    <div className="flex justify-center items-center py-16 px-4">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-4xl text-center text-transparent bg-clip-text pb-1 bg-gradient-to-r from-blue-600 via-orange-400 to-pink-400 font-bold">
            Reset Password
          </h1>
          <form className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              className="input w-full focus:outline-transparent focus:border-gray-400 focus:shadow-xl"
              placeholder="Email"
            />

            <button
              type="submit"
              className="btn hover:bg-gradient-to-l group  bg-gradient-to-r from-blue-400 hover:shadow-lg   via-orange-600 to-pink-400 text-white rounded-full  mt-4"
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
