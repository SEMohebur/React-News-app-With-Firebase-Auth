import React, { use } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthContext";
import { useLocation, useNavigate } from "react-router";

const SocialLogin = () => {
  const { handleSingIngWithGoogle } = use(AuthContext);
  const location = useLocation();

  const navigate = useNavigate();

  const handleSignInWithGoogleProvider = () => {
    handleSingIngWithGoogle()
      .then((res) => {
        // console.log(res);
        navigate(navigate(`${location.state ? location.state : "/"}`));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h2 className=" font-bold mb-5">Login with</h2>
      <div className=" space-y-3">
        <button
          onClick={handleSignInWithGoogleProvider}
          className=" btn btn-outline btn-secondary  w-full"
        >
          <FcGoogle size={24} />
          <p className=" text-[8px] md:text-[14px]"> Login with Google</p>
        </button>
        <button className=" btn btn-outline btn-primary w-full">
          <FaGithub size={24} />
          <p className="text-[8px] md:text-[14px]">Login with Github</p>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
