import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";

const SettingsItem = ({ icon, view }) => {
  const navigate = useNavigate();

  const goToView = () => {
    navigate(view);
  };
  return (
    <>
      <FontAwesomeIcon
        onClick={goToView}
        icon={icon}
        className="mx-3 cursor-pointer"
      />
    </>
  );
};

export default SettingsItem;
