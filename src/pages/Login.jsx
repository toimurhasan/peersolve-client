import React, { use } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";
import AuthContext from "../contexts/AuthContext";
import Swal from "sweetalert2";

const Login = () => {
  const { signInUser, continueWithGoogle, currentUser } = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    if (currentUser) {
      Swal.fire({
        icon: "error",
        title: "Already Logged In",
        showConfirmButton: false,
        timer: 2000,
      });
      return;
    }
    signInUser(email, password)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          showConfirmButton: false,
          timer: 2000,
        });
        navigate(location?.state || "/");
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
  const handleClick = () => {
    if (currentUser) {
      Swal.fire({
        icon: "error",
        title: "Already Logged In",
        showConfirmButton: false,
        timer: 2000,
      });
      return;
    }
    continueWithGoogle()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          showConfirmButton: false,
          timer: 2000,
        });
        navigate(location?.state || "/");
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
              className="btn hover:bg-gradient-to-l group  bg-gradient-to-r from-blue-500 hover:shadow-lg   via-orange-400 to-pink-500  rounded-full  mt-4"
            >
              <span className="group-hover:-translate-y-0.5 transition">Login</span>
            </button>
          </form>
          <div className="divider">In a hurry?</div>
          <button
            onClick={handleClick}
            type="submit"
            className="btn hover:bg-gradient-to-l group  bg-gradient-to-r from-gray-400 hover:shadow-lg   via-gray-500 to-gray-400 rounded-full "
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
