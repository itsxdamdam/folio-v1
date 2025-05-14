import React, { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";
// import Screen from "../animations/Preloader/Screen";
const Navbar = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  console.log("navbar-drk", darkMode);

  // const handleClick = () => {
  //   toggleDarkMode()
  // }

  return (
    <div className={darkMode ? "bg-black" : "bg-white"}>
      {`${darkMode} is here`}
      <br />
      Navbar <br />
      <button onClick={toggleDarkMode}>Change Mode Button</button>
      <br />
      current theme: {darkMode ? "dark" : "light"}
    </div>
  );
};

export default Navbar;
