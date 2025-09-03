import React from "react";

export default function Spreadop() {
  let user1 = {
    firstName: "Ahmad",
    age: 15,
    city: "Jaranwala",
  };
  let user2 = {
    lastName: "Raza",
    age: 17,
    country: "Pakistan",
  };
  let user = { ...user1, ...user2 };
  console.log(user);
  return (
    <>
      <div className="text-center">
        <div className="container">
          <div className="row">
            <div className="col">
              <div>
                <h1>Spread Operator</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="border border-dark" />
    </>
  );
}
