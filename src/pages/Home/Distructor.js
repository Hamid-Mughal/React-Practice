import React from "react";

export default function Distructor() {
  const user = {
    firstName: "Hamid",
    lastName: "Raza",
    age: 23,
    City: "Faisalabad",
    Country: "Pakistan",
  };

  const { firstName, lastName, age } = user;
  return (
    <>
      <div className="text-center">
        <div className="container">
          <div className="row">
            <div className="col">
              <div>
                <h1>Distructor</h1>
                <p>
                  {firstName} {lastName}, age is {age}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="border border-dark" />
    </>
  );
}
