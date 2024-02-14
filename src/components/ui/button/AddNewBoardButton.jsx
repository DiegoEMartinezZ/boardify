import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BoardifyContext } from "../../../context/BoardifyContext";

const AddNewBoardButton = () => {
  // Button to add new board list

  const { handleAddNewBoard, iconToCancel, iconToCancelClicked } =
    useContext(BoardifyContext);

  return (
    <button onClick={handleAddNewBoard}>
      <FontAwesomeIcon
        icon={iconToCancel}
        className={`px-3 hover:cursor-pointer ${!iconToCancelClicked ? "text-aquamarine-400" : "text-cancel-50"} `}
      />
    </button>
  );
};

export default AddNewBoardButton;
