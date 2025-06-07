import React, { use } from "react";
import { FaGoogle } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";
import AuthContext from "../contexts/AuthContext";

const Login = () => {
  const { signInUser } = use(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signInUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
      });
  };
  return (
    <div className="flex justify-center items-center py-16">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-4xl text-center text-transparent bg-clip-text pb-1 bg-gradient-to-r from-blue-600 via-orange-400 to-pink-400 font-bold">
            Login Form
          </h1>
          <form onSubmit={handleSubmit} className="fieldset">
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input w-full focus:outline-transparent focus:border-gray-400 focus:shadow-xl"
              placeholder="Email"
            />
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input w-full focus:outline-transparent focus:border-gray-400 focus:shadow-xl"
              placeholder="Password"
            />
            <div>
              <Link to={"/forget-password"} className="link link-hover">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="btn hover:bg-gradient-to-l group  bg-gradient-to-r from-blue-400 hover:shadow-lg   via-orange-600 to-pink-400 text-white rounded-full  mt-4"
            >
              <span className="group-hover:-translate-y-0.5 transition">Login</span>
            </button>
          </form>
          <div className="divider">In a hurry?</div>
          <button
            type="submit"
            className="btn hover:bg-gradient-to-l group  bg-gradient-to-r from-gray-400 hover:shadow-lg   via-gray-600 to-gray-400 text-white rounded-full "
          >
            <span className="group-hover:-translate-y-0.5 transition flex items-center gap-2">
              <FaGoogle /> <span>Continue With Google</span>
            </span>
          </button>
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

export default Login;
