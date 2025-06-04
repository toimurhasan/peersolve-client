import React from "react";

const Login = () => {
  return (
    <div className="flex justify-center items-center py-16">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-4xl text-center text-transparent bg-clip-text pb-1 bg-gradient-to-r from-blue-600 via-orange-400 to-pink-400 font-bold">
            Login Form
          </h1>
          <form className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              className="input w-full focus:outline-transparent focus:border-gray-400 focus:shadow-xl"
              placeholder="Email"
            />
            <label className="label">Password</label>
            <input
              type="password"
              className="input w-full focus:outline-transparent focus:border-gray-400 focus:shadow-xl"
              placeholder="Password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button
              type="submit"
              className="btn hover:bg-gradient-to-l group  bg-gradient-to-r from-blue-400 hover:shadow-lg   via-orange-600 to-pink-400 text-white rounded-full  mt-4"
            >
              <span>Login</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
