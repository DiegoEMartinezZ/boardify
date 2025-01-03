import React, { useContext } from "react";
import { BoardifyContext } from "../../context/BoardifyContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faX } from "@fortawesome/free-solid-svg-icons";
import SettingsItem from "../ui/button/SettingsItem";

const TasksAdded = () => {
  const { arrayNameList } = useContext(BoardifyContext);

  return (
    <>
      <ul>
        {arrayNameList.map((oneTask, idx) => (
          <li
            key={idx}
            className="my-4 flex items-center justify-between rounded-md bg-aquamarine-950 p-8 text-left text-aquamarine-400"
          >
            {oneTask}
            <section>
              <SettingsItem icon={faEye} view={"/tasks"} />
              <FontAwesomeIcon icon={faX} className="mx-3" />
            </section>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TasksAdded;
