import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthContext";

const LoginPage = () => {
  const { signIn } = use(AuthContext);
  const [error, setError] = useState("");

  // login succes hole kon linke jabe sei path name ber kora hoy location pathName state theke,
  const location = useLocation();
  // console.log(location);

  const navigate = useNavigate();

  const handleSubmite = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signIn(email, password)
      .then((res) => {
        // console.log(res.user);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((err) => {
        const errorCode = err.code;
        // const errorMessage = err.message;
        setError(errorCode);
      });
  };

  console.log(error);

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className=" text-center pt-4 font-semibold text-xl">Login Now!</h2>
        <form onSubmit={handleSubmite} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              required
            />
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
              required
            />
            <p>Forgot Password?</p>
            {error && <p className=" text-red-500 text-[8px]">{error}</p>}

            <button className="btn btn-neutral mt-4">Login</button>
            <div>
              <div className="link link-hover">
                Dont’t Have An Account ?{" "}
                <Link to="/auth/register" className=" text-blue-400 ">
                  Register
                </Link>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
