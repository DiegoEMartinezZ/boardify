import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SettingsWindow from "../../menu/SettingsWindow";
import { BoardifyContext } from "../../../context/BoardifyContext";

const SettingsButton = () => {
  // Button to open settings menu

  const {
    handleSettings,
    settingsButton,
    settingsCancelClicked,
    settingsOpen,
  } = useContext(BoardifyContext);

  return (
    <>
      <button onClick={handleSettings}>
        <FontAwesomeIcon
          icon={settingsButton}
          className={`px-3 hover:cursor-pointer ${!settingsCancelClicked ? "text-aquamarine-400" : "text-cancel-50"} `}
        />
      </button>
      {settingsOpen && <SettingsWindow />}
    </>
  );
};

export default SettingsButton;
