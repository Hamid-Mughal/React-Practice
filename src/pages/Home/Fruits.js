import React from "react";

export default function Fruits() {
  const fruits = ["Apple", "Banana", "Mango", "Orange", "Strawberry"];
  return (
    <>
      <div className="text-center">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>This is our fruits section</h1>
              <ul>
                {fruits.map((fruit, i) => {
                  return (
                    <li key={i}>
                      {i + 1} {fruit}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr className="border border-dark" />
    </>
  );
}
