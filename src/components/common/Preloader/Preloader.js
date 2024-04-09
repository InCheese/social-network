import React from "react";
import spinner from "../../../assets/spinner.gif";

const Preloader = () => {
  return (
    <div>
      <img src={spinner} style={{ height: "30px" }} />
    </div>
  );
};

export default Preloader;
