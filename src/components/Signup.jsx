import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <div
        className="container mt-5 sign d-flex justify-content-center align-items-center mb-5 mt-2 text-dark rounded shadow-lg"
        style={{ maxWidth: "700px" }}
      >
        <div className="card sign p-4" style={{ width: "100%" }}>
          <h2 className="mt-5 text-center p-3">Get Started</h2>
          <p className="parag">Create an account to Register keke Riders</p>
          <form className="p-3 ">
            <div className="mb-3">
              <input
                type="text"
                className="form-control border-0"
                id="firstName"
                name="firstName"
                placeholder="Full Name"
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control border-0"
                id="email"
                name="email"
                placeholder="Email"
              />
            </div>
            <div className="mb-3">
              <div className="user-box position-relative">
                <input
                  type="password"
                  className="form-control border-0"
                  id="password"
                  name="password"
                  placeholder="Password"
                />
              </div>
            </div>
            <button type="submit" className="btn fw-bold rounded-pill  reg">
              Login
            </button>
            <p className="fw-light text-center mt-3">
              Already have an account?
            </p>
            <span>
              <Link className="fw-bold" to="/login">
                Login
              </Link>
            </span>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
