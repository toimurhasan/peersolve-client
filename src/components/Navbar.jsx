import React, { use } from "react";
import { Link, NavLink } from "react-router";
import ThemeToggle from "./ThemeToggle";
import AuthContext from "../contexts/AuthContext";
import Swal from "sweetalert2";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
  const { currentUser, signOutUser } = use(AuthContext);
  // console.log(currentUser?.displayName);
  const avatar = currentUser?.photoURL;
  const userName = currentUser?.displayName;
  const handleClick = () => {
    signOutUser()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Sign Out Successful",
          showConfirmButton: false,
          timer: 2000,
        });
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Unexpected Error",
          showConfirmButton: false,
          timer: 2000,
        });
      });
  };

  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/assignments"}>Assignments</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-gradient-to-r text-black from-blue-200/95 via-orange-100 to-pink-200/95 shadow-sm  fixed top-0 z-10 ">
      <div className="navbar-start gap-1">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn  rounded-full px-2.5 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to={"/"} className=" text-xl">
          <span className="font-bold">Peer</span>Solve
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-2">
        <ThemeToggle></ThemeToggle>

        {currentUser ? (
          <>
            <button onClick={handleClick} className="btn">
              Sign Out
            </button>
            <div
              data-tooltip-id="my-tooltip"
              data-tooltip-content={userName}
              data-tooltip-place="bottom-start"
              className="avatar cursor-pointer"
            >
              <div className="w-12 rounded-full border-orange-600 shadow-2xl shadow-orange-500 border-2">
                <img src={avatar} />
              </div>
            </div>
          </>
        ) : (
          <Link to={"/login"}>
            <button className="btn">Login</button>
          </Link>
        )}
      </div>
      <Tooltip id="my-tooltip" />
    </div>
  );
};

export default Navbar;
