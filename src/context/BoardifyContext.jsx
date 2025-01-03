import React, { useRef } from "react";
import { createContext, useState } from "react";
import { faChevronDown, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export const BoardifyProvider = ({ children }) => {
  /*
    Edit Board name
  */
  const [initialNameBoard, setInitialNameBoard] = useState("Board List 01");

  /*
    Button 'settings' in the navbar when the button is clicked to cancel and to select
  */
  const [settingsButton, setSettingsButton] = useState(faChevronDown);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [settingsCancelClicked, setSettingsCancelClicked] = useState(false);
  /*
    Button 'New Board' in the navbar when the button is clicked to cancel and to select
  */

  const [iconToCancel, setIconToCancel] = useState(faCirclePlus);
  const [iconToCancelClicked, setIconToCancelClicked] = useState(false);

  /*
    Select all the input when clicked
  */
  const inputRef = useRef(null);

  const handleInputSelected = () => {
    if (inputRef.current) {
      inputRef.current.select();
    }
  };

  /*
    New Board name
  */
  const newBoardName = (e) => {
    e.preventDefault();
    setInitialNameBoard(e.target.value);
  };

  /*
    Settings button config
  */
  const handleSettings = () => {
    setSettingsButton(
      settingsButton === faChevronDown ? faXmark : faChevronDown,
    );
    setSettingsCancelClicked(!settingsCancelClicked);
    setSettingsOpen(!settingsOpen);
    if (!settingsOpen && iconToCancel === faXmark) {
      setSettingsOpen(!settingsOpen);
      setSettingsButton(faXmark);
      setIconToCancel(faCirclePlus);
      setIconToCancelClicked(settingsCancelClicked);
      setSettingsCancelClicked(!settingsCancelClicked);
    }
  };

  /*
    Add new board button config
  */
  const handleAddNewBoard = () => {
    setIconToCancel(iconToCancel === faCirclePlus ? faXmark : faCirclePlus);
    setIconToCancelClicked(!iconToCancelClicked);
    if (settingsOpen && iconToCancel === faCirclePlus) {
      setSettingsOpen(!settingsOpen);
      setSettingsButton(faChevronDown);
      setSettingsCancelClicked(!settingsCancelClicked);
    }
  };

  /*
    Window Add List
  */

  const [addList, setAddList] = useState(false);
  const [nameItem, setNameItem] = useState("");
  const [arrayNameList, setArrayNameList] = useState([]);

  const addListWindow = () => {
    setAddList(!addList);
  };

  const addItem = () => {
    setArrayNameList([...arrayNameList, nameItem]);
    setNameItem("");
    setAddList(!addList);
  };

  return (
    <BoardifyContext.Provider
      value={{
        initialNameBoard,
        newBoardName,
        addListWindow,
        inputRef,
        handleInputSelected,
        handleSettings,
        settingsButton,
        settingsCancelClicked,
        settingsOpen,
        handleAddNewBoard,
        iconToCancel,
        iconToCancelClicked,
        addList,
        addItem,
        nameItem,
        setNameItem,
        arrayNameList,
      }}
    >
      {children}
    </BoardifyContext.Provider>
  );
};
export const BoardifyContext = createContext();
