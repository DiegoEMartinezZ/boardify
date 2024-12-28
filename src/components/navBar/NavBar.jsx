import React, { useContext } from "react";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { BoardifyContext } from "../../context/BoardifyContext";
import Input from "../ui/form/Input";
import FavoriteBoard from "../ui/button/FavoriteBoard";
import SettingsButton from "../ui/button/SettingsButton";
import AddNewBoardButton from "../ui/button/AddNewBoardButton";

const NavBar = () => {
  const { initialNameBoard, newBoardName, handleInputSelected } =
    useContext(BoardifyContext);

  const formPrevent = (e) => {
    e.preventDefault();
  };

  return (
    <nav>
      <form
        onSubmit={formPrevent}
        className="flex flex-nowrap items-center justify-around bg-aquamarine-950 p-3 text-aquamarine-300"
      >
        <div className="flex items-center hover:cursor-pointer ">
          <FavoriteBoard icon={faStar} />
          <Input
            id="nameList"
            name="nameList"
            type="text"
            value={initialNameBoard}
            onChange={newBoardName}
            onClick={handleInputSelected}
          />
        </div>
        <div className="flex">
          <SettingsButton />
          <AddNewBoardButton icon={faCirclePlus} />
        </div>
      </form>
    </nav>
  );
};

export default NavBar;
