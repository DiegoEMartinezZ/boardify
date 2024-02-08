import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faChevronDown, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { BoardifyContext } from "../../context/BoardifyContext";

const NavBar = () => {
  const { initialNameBoard, newBoardName } = useContext(BoardifyContext);
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex flex-nowrap justify-around items-center bg-aquamarine-950 p-3 text-aquamarine-300"
    >
      <div className="flex flex-nowrap items-center hover:cursor-pointer ">
        <FontAwesomeIcon
          icon={faStar}
          className="px-5 hover:text-aquamarine-100"
        />
        <input
          type="text"
          value={initialNameBoard}
          className=" bg-aquamarine-950 border-none capitalize "
          onChange={newBoardName}
        />
      </div>
      <div className="flex flex-nowrap">
        <FontAwesomeIcon
          icon={faChevronDown}
          className="px-3 hover:cursor-pointer hover:text-aquamarine-100"
        />
        <FontAwesomeIcon
          icon={faCirclePlus}
          className="px-3 hover:cursor-pointer hover:text-aquamarine-100"
        />
      </div>
    </form>
  );
};

export default NavBar;
