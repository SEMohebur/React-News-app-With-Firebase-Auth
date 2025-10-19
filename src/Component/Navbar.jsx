import { Link, NavLink } from "react-router";
import userIcon from "../assets/user.png";
import { AuthContext } from "../Provider/AuthContext";
import { use } from "react";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);

  const handleLogOut = () => {
    signOutUser();
  };
  return (
    <div className=" md:flex gap-4 justify-between items-center space-y-3">
      <div className=" flex-1 text-center md:text-start">
        <span className=" text-accent">{user && user.email}</span>
      </div>
      <div className=" flex-1   nav flex justify-center gap-5 text-accent ">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className=" flex-1 login-btn flex items-center justify-center md:justify-end gap-3">
        <img
          className="w-10 h-10  rounded-full object-cover border border-gray-300 shadow-sm hover:scale-105 transition-transform duration-300"
          src={user ? user.photoURL : userIcon}
          alt="User Profile"
        />

        {user ? (
          <button onClick={handleLogOut} className=" btn btn-primary">
            Log Out
          </button>
        ) : (
          <Link to="/auth/login" className=" btn btn-primary px-10">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
