import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const FavoriteBoard = ({ icon }) => {
  // Selected Favorite Board

  const [favoriteBoardIcon, setFavoriteIconBoard] = useState(icon);
  const [favoriteBoardIconClicked, setFavoriteBoardIconClicked] =
    useState(false);
  const handleFavoriteBoard = () => {
    setFavoriteIconBoard(favoriteBoardIcon === icon ? faStar : icon);
    setFavoriteBoardIconClicked(!favoriteBoardIconClicked);
  };
  return (
    <FontAwesomeIcon
      icon={favoriteBoardIcon}
      className={`px-3 hover:cursor-pointer ${!favoriteBoardIconClicked ? "text-aquamarine-400" : "text-turbo-400"} `}
      onClick={handleFavoriteBoard}
    />
  );
};

export default FavoriteBoard;
