import React from 'react'

export default function TernaryOp() {
    let cgpa = 3.65;
  return (
   <div className="text-center">
      <div className="container">
        <div className="row">
          <div className="col">
          <div>
            <h1>Ternary Operators</h1>
            <p>
                {cgpa>=3.5 ? "Excellent Score" : "Good! not a bad Score keep growing"}
            </p>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}
