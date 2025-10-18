import React from "react";
import swiming from "../assets/swimming.png";
import classImg from "../assets/class.png";
import playGround from "../assets/playground.png";

const QZone = () => {
  return (
    <div className=" bg-base-200 p-4 rounded-md">
      <h2 className=" font-semibold ">Q-Zone</h2>
      <div className=" flex flex-col justify-center">
        <img src={swiming} alt="" />
        <img src={classImg} alt="" />
        <img src={playGround} alt="" />
      </div>
    </div>
  );
};

export default QZone;
