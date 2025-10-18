import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h2 className=" font-semibold">Find Us On</h2>
      <div className="join join-vertical w-full">
        <button className="btn join-item justify-start">
          <FaFacebookF className=" text-indigo-500 bg-gray-200 rounded-full p-1 size-7 " />
          Facebook
        </button>
        <button className="btn join-item justify-start">
          <FaTwitter className=" text-sky-500 bg-gray-200 rounded-full p-1 size-7 " />
          Twitter
        </button>
        <button className="btn join-item justify-start">
          <FaInstagram className=" text-red-500 bg-gray-200 rounded-full p-1 size-7 " />
          Instagram
        </button>
      </div>
    </div>
  );
};

export default FindUs;
