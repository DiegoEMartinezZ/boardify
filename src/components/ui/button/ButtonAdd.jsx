import React from "react";
import AddText from "../textStyles/AddText";
import { BoardifyContext } from "../../../context/BoardifyContext";
import { useContext } from "react";
import Input from "../form/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faX } from "@fortawesome/free-solid-svg-icons";

const ButtonAdd = () => {
  const {
    addListWindow,
    addList,
    addItem,
    nameItem,
    setNameItem,
    handleInputSelected,
  } = useContext(BoardifyContext);
  return (
    <div>
      <div className="my-5">
        {addList && (
          <div className=" flex w-80 justify-center rounded-lg bg-aquamarine-400 px-4 py-3">
            <Input
              id="nameList"
              name="nameList"
              type="text"
              value={nameItem}
              onChange={(e) => setNameItem(e.target.value)}
              onClick={handleInputSelected}
            />
            <button
              onClick={addItem}
              className="mx-1 rounded-md bg-aquamarine-200 px-2"
            >
              <FontAwesomeIcon icon={faCheck} />
            </button>
            <button className="mx-1 rounded-md bg-aquamarine-200 px-2">
              <FontAwesomeIcon icon={faX} />
            </button>
          </div>
        )}
      </div>
      <button
        onClick={addListWindow}
        className="m-auto my-6 flex cursor-pointer flex-col rounded-full bg-aquamarine-800 p-2.5 text-center "
      >
        <AddText txt={"+ Add a new list"} />
      </button>
    </div>
  );
};

export default ButtonAdd;
