import React from "react";
import { createContext, useState } from "react";
export const BoardifyProvider = ({ children }) => {
  /*
    Edit Board name
  */

  const [initialNameBoard, setInitialNameBoard] = useState("Board List 01");
  const newBoardName = (e) => {
    e.preventDefault();
    setInitialNameBoard(e.target.value);
  };

  /*
    Settings navigation bar
  */

  /*
    Window Add List
  */
  const addListWindow = () => {
    console.log("se esta oprimiendo el boton de agregar lista");
  };

  return (
    <BoardifyContext.Provider
      value={{ initialNameBoard, newBoardName, addListWindow }}
    >
      {children}
    </BoardifyContext.Provider>
  );
};
export const BoardifyContext = createContext();
