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
        className="2xl:w-full,m-8 m-8 w-4/5 cursor-pointer rounded-full bg-aquamarine-800 p-2.5 text-center "
      >
        <AddText txt={"+ Add a new list"} />
      </button>
    </div>
  );
};

export default ButtonAdd;
