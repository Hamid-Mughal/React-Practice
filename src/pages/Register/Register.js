import React, { useState } from "react";
import { Link } from "react-router-dom";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};
export default function Register() {
  const [state, setState] = useState(initialState);
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state)
  };
  return (
    <div className="text-center">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card p-2 w-50 m-auto mt-5 ">
              <h2>Register</h2>

              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col">
                    <input
                      type="text"
                      name="firstName"
                      className="form-control w-75 mx-auto"
                      placeholder="Enter your first name"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col py-3">
                    <input
                      type="text"
                      name="lastName"
                      className="form-control w-75 mx-auto"
                      placeholder="Enter your last name"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <input
                      type="email"
                      name="email"
                      className="form-control w-75 mx-auto"
                      placeholder="Enter your email"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="row py-4">
                  <div className="col ">
                    <input
                      type="passwor"
                      name="password"
                      className="form-control w-75 mx-auto"
                      placeholder="Enter Your Password"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col ">
                    <button className="btn btn-success w-50">Register</button>
                  </div>
                </div>
                <div className="row">
                  <div className="col ">
                    <p className="link mt-4">
                      Already have an Account <Link to="/login">Login</Link>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
