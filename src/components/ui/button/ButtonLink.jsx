import React from "react";
import { Link } from "react-router-dom";

const ButtonLink = ({ page, name }) => {
  return (
    <Link to={page}>
      <button className="text-aquamarine-300 bg-aquamarine-950 p-1.5 m-3 rounded-md text-sm ">
        {name}
      </button>
    </Link>
  );
};

export default ButtonLink;
