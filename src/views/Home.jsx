import React from "react";
import NavBar from "../components/navBar/NavBar";
import AddList from "../components/add/AddList";

const home = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-b from-aquamarine-50 from-50% to-aquamarine-200">
      <NavBar />
      <AddList />
    </div>
  );
};

export default home;
