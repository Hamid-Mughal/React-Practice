import React from "react";

export default function index() {
  let year =new Date().getFullYear();
  
  return (
   <footer>
     <div className="bg-dark text-light text-center">
      <div className="container">
        <div className="row">
          <div className="col">
            <p className="mb-0">&copy; {year} All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </div>
   </footer>
  );
}
