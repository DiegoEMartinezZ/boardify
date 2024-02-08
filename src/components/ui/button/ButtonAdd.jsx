import React from "react";
import AddText from "../textStyles/AddText";
import { BoardifyContext } from "../../../context/BoardifyContext";
import { useContext } from "react";

const ButtonAdd = () => {
  const { addListWindow } = useContext(BoardifyContext);
  return (
    <div>
      <button
        onClick={addListWindow}
        data="add"
        className="w-4/5 2xl:w-full bg-aquamarine-800 text-center p-2 m-10 rounded-full cursor-pointer "
      >
        <AddText txt={"+ Add a new list"} />
      </button>
    </div>
  );
};

export default ButtonAdd;
