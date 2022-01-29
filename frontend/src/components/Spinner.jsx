import React from "react";
import {BallTriangle} from "react-loader-spinner";

const Spinner = ({ message }) => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <BallTriangle
        color="#00BFFF"
        height={50}
        width={200}
        className="m-5"
      />
      <p className="p-2 text-center text-sm font-semibold">{message}</p>
    </div>
  );
};

export default Spinner;
