import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <main className="mt-[65px] max-w-7xl mx-auto">
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
};

export default MainLayout;
