import React from "react";

const SettingsWindow = () => {
  return (
    <section>
      <li className="absolute -translate-x-5 translate-y-5 transform  cursor-pointer list-none rounded-md bg-aquamarine-950  p-3">
        <ul className="my-3 hover:text-aquamarine-100"> My Boards </ul>
        <ul className="hover:text-aquamarine-100"> Favorite Boards </ul>
      </li>
    </section>
  );
};

export default SettingsWindow;
