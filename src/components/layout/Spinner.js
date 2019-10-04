import React from "react";
import spinner from "./spinner.gif";
const Spinner = () => {
  return (
    <div>
      <img
        src={spinner}
        alt="spinner"
        style={{ width: "200px", margin: "auto", display: "black" }}
      />
    </div>
  );
};

export default Spinner;
