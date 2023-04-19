import React from "react";

const Button = ({ text, items, runFun }) => {
  return (
    <>
      <button onClick={() => runFun(items)}>{text}</button>
    </>
  );
};

export default Button;
