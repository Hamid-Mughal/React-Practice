import React from "react";
import { countries } from "../../data/countries";
import Buttons from "../../components/Buttons/Buttons";

export default function TernaryOp() {
  let cgpa = 3.65;
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Button is working!");
  };
  return (
    <>
      <div className="text-center">
        <div className="container">
          <div className="row">
            <div className="col">
              <div>
                <h1>Ternary Operators</h1>
                <p>
                  {cgpa >= 3.5
                    ? "Excellent Score"
                    : "Good! not a bad Score keep growing"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="border border-dark" />

      {/* Importing pure JS file + map function */}
      <div className="text-center">
        <div className="container">
          <div className="row">
            <div className="col">
              <div>
                <h3>Importing pure JS file Without Default keyword</h3>
                <h4>Countries</h4>
                <ul>
                  {countries.map((country, index) => (
                    <li key={country}>
                      {index + 1}. {country}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="border border-dark" />
      {/* dynamic buttons using passsing props to function */}
      <div className="text-center">
        <div className="container">
          <div className="row">
            <div className="col">
              <div>
                <h3>This is a dynamic button (passing Porps to function)</h3>
                <Buttons bgColor="info" icon="far fa-bell" text="Create" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="border border-dark" />
      {/* Event passing  */}
      <div className="text-center my-4">
        <div className="container">
          <div className="row">
            <div className="col">
              <div>
                <h3>This is a Event button (passing Event as Parameter)</h3>
                <button className="btn btn-secondary" onClick={handleSubmit}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="border border-dark" />
      {/* iniline Styling in react  */}

      <div className="container">
        <div className="row">
          <div className="col">
            <div>
              <p
                style={{
                  color: "red",
                  textAlign: "center",
                  marginTop: 30,
                  marginBottom: "100px",
                }}
              >
                This is Inline Styling in React.js
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
