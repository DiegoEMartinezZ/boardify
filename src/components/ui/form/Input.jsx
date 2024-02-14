import React, { useContext } from "react";
import { BoardifyContext } from "../../../context/BoardifyContext";

const Input = (props) => {

const {inputRef} = useContext(BoardifyContext)

  return <input ref={inputRef} className="bg-aquamarine-950 border-none capitalize"
  {...props}
  />;
};

export default Input;
