import React from "react";
import { useSelector } from "react-redux";
import "../styles/custom.css";

const HelloWorld = () => {
  const message = useSelector((state) => {
    return state.message;
  });

  return (
    <>
      <div>
        <h1 className="custom-heading">{message}</h1>
      </div>
    </>
  );
};

export default HelloWorld;
