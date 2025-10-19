import React, { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthContext";

const RegisterPage = () => {
  const { createUser, setUser, user, updateUser } = use(AuthContext);

  const navigate = useNavigate();

  const handleSubmite = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    createUser(email, password)
      .then((res) => {
        const user = res.user;
        updateUser({ displayName: name, photoURL: photo }).then(() => {
          setUser({ ...user, displayName: name, photoURL: photo });
        });
        navigate("/");
      })
      .catch((err) => {
        // console.log(err);
        setUser(user);
      })
      .catch((err) => console.log(err));
  };

  // console.log(user);

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className=" text-center pt-4 font-semibold text-xl">
          Register your account{" "}
        </h2>
        <form onSubmit={handleSubmite} className="card-body">
          <fieldset className="fieldset">
            {/* name  */}
            <label className="label">Name</label>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Name"
              required
            />

            {/* photo url  */}
            <label className="label">Photo URL</label>
            <input
              name="photo"
              type="text"
              className="input"
              placeholder="photo url"
              required
            />

            {/* email  */}
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              required
            />

            {/* password  */}
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
              required
            />

            <button className="btn btn-neutral mt-4">Register</button>
            <div>
              <div className="link link-hover">
                Allready Have An Acoount ?
                <Link to="/auth/login" className=" text-blue-400 ">
                  Login
                </Link>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
