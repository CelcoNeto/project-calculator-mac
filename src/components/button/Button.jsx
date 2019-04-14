import React from "react";
import "./Button.css";

const Button = ({ label, double, operation, triple, click }) => {
  let classes = "button ";
  classes += operation ? "operation" : "";
  classes += double ? "double" : "";
  classes += triple ? "triple" : "";

  return (
    <button className={classes} onClick={() => click && click(label)}>
      {label}
    </button>
  );
};

export default Button;
