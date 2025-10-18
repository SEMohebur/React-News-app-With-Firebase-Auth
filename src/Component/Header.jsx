import React from "react";

import logo from "../assets/logo.png";
import { format } from "../../node_modules/date-fns/format";

const Header = () => {
  return (
    <div className=" flex justify-center items-center flex-col">
      <img className=" w-[400px] " src={logo} alt="" />
      <p className=" text-accent">Journalism Without Fear or Favour</p>
      <p className=" font-semibold text-accent">
        {format(new Date(), "EEE, MMMM MM, yyyy")}
      </p>
    </div>
  );
};

export default Header;
