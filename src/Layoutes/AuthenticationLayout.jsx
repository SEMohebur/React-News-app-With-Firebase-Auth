import React from "react";
import Navbar from "../Component/Navbar";
import { Outlet } from "react-router";
import Footer from "../Component/Footer";

const AuthenticationLayout = () => {
  return (
    <div className=" bg-base-200 h-screen">
      <div className=" w-11/12 mx-auto">
        <header className=" py-5">
          <Navbar></Navbar>
        </header>
        <main>
          <Outlet></Outlet>
        </main>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default AuthenticationLayout;
