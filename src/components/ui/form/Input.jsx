import React, { useContext } from "react";
import { BoardifyContext } from "../../../context/BoardifyContext";

const Input = (props) => {
  const { inputRef } = useContext(BoardifyContext);

  return (
    <input
      ref={inputRef}
      className="border-none bg-aquamarine-950 capitalize text-turbo-50"
      {...props}
    />
  );
};

export default Input;
