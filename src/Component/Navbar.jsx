import React from "react";
import { NavLink } from "react-router";
import userIcon from "../assets/user.png";

const Navbar = () => {
  return (
    <div className=" flex gap-4 justify-between items-center">
      <div className=" flex-1"></div>
      <div className=" flex-1   nav flex justify-center gap-5 text-accent ">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className=" flex-1 login-btn flex justify-end gap-3">
        <img src={userIcon} alt="" />
        <button className=" btn btn-primary px-10">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
