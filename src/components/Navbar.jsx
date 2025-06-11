import React, { use } from "react";
import { Link, NavLink } from "react-router";
import ThemeToggle from "./ThemeToggle";
import AuthContext from "../contexts/AuthContext";
import Swal from "sweetalert2";
import { Tooltip } from "react-tooltip";
import { motion, useScroll } from "motion/react";

const Navbar = () => {
  const { scrollYProgress } = useScroll();

  const { currentUser, signOutUser } = use(AuthContext);
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
      {currentUser && (
        <>
          <li>
            <NavLink to={"/pending-assignments"}>Pending Assignments</NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <>
      <div className="navbar  xl:px-8 bg-gradient-to-r  from-gradient-one/90 via-gradient-two to-gradient-three/90 fixed top-0 z-10 ">
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

              <div className="dropdown   dropdown-end">
                <div
                  tabIndex={0}
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content={userName}
                  data-tooltip-place="bottom-start"
                  className="avatar cursor-pointer"
                >
                  <div className="w-12 rounded-full border-gray-400 shadow-2xl  border-[1px]">
                    <img src={avatar} />
                  </div>
                </div>

                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
                >
                  <li>
                    <Link to={"/create-assignments"}>Create Assignments</Link>
                  </li>
                  <li>
                    <Link>My Attempted Assignments</Link>
                  </li>
                </ul>
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
      <motion.div
        style={{
          scaleX: scrollYProgress,
        }}
        className="fixed h-0.5  rounded-full w-full origin-left z-[1] bg-progress-bar"
      ></motion.div>
    </>
  );
};

export default Navbar;
