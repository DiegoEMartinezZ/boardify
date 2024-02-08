import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialMedia = ({ url, img }) => {
  return (
    <li className="list-none text-aquamarine-950 text-2xl">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={img} />
      </a>
    </li>
  );
};

export default SocialMedia;
