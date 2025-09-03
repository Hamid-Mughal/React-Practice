import React from "react";

export default function Buttons(props) {
  
const { bgColor, icon, text } = props;

  return (
    <button
      className={`btn btn-${bgColor ? bgColor : "light"} my-4`}>
      {icon && <i className={`${icon} me-2`}></i>}
      {text}
    </button>
  );
}
