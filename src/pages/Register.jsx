import React, { use, useState } from "react";
import { Link } from "react-router";
import AuthContext from "../contexts/AuthContext";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser, updateUser } = use(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const photo = form.photo.value;
    createUser(email, password)
      .then(() => {
        updateUser(name, photo)
          .then(() => {
            Swal.fire({
              icon: "success",
              title: "Register Successful",
              showConfirmButton: false,
              timer: 2000,
            });
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

  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(true);
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

  const handlePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
    setIsValid(passwordRegex.test(value));
  };

  return (
    <div className="flex justify-center items-center py-16 px-4">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-4xl text-center text-transparent bg-clip-text pb-1 bg-gradient-to-r from-blue-600 via-orange-400 to-pink-400 font-bold">
            Register Form
          </h1>
          <form onSubmit={handleSubmit} className="fieldset">
            <label className="label">Name</label>
            <input
              required
              name="name"
              type="text"
              className="input w-full focus:outline-transparent focus:border-gray-400 focus:shadow-xl"
              placeholder="Full Name"
            />
            <label className="label">Email</label>
            <input
              required
              name="email"
              type="email"
              className="input w-full focus:outline-transparent focus:border-gray-400 focus:shadow-xl"
              placeholder="Email Address"
            />
            <label className="label">Photo URL</label>
            <input
              required
              name="photo"
              type="text"
              className="input w-full focus:outline-transparent focus:border-gray-400 focus:shadow-xl"
              placeholder="Paste Photo URL"
            />
            <label className="label">Password</label>
            <input
              required
              onChange={handlePassword}
              value={password}
              name="password"
              type="password"
              className="input w-full focus:outline-transparent focus:border-gray-400 focus:shadow-xl"
              placeholder="Password"
            />
            {!isValid && (
              <p className="text-xs text-red-600 mt-4">
                Password must be at least 6 characters, and include both uppercase and lowercase
                letters.
              </p>
            )}
            {isValid ? (
              <button
                type="submit"
                className="btn hover:bg-gradient-to-l group  bg-gradient-to-r from-blue-400 hover:shadow-lg   via-orange-600 to-pink-400 text-white rounded-full  mt-4"
              >
                <span className="group-hover:-translate-y-0.5 transition flex items-center gap-2">
                  Register
                </span>
              </button>
            ) : (
              <button
                disabled
                type="submit"
                className="btn hover:bg-gradient-to-l group bg-gradient-to-r from-gray-400 hover:shadow-lg   via-gray-600 to-gray-400 text-white rounded-full  mt-4"
              >
                <span className="group-hover:-translate-y-0.5 transition flex items-center gap-2">
                  Register
                </span>
              </button>
            )}
          </form>
          <div>
            <p className="flex justify-center gap-1">
              <span>Already have an account?</span>
              <Link className="link text-blue-600" to="/login">
                Login here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
