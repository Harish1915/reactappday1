import { useContext } from "react";
import NavigationNavBar from "../components/nav-navbar/navigation-navbar";
import { DataContext } from "../App";
import "./style.css";

const SettingScreen = () => {
  const { username, darkMode, changeUsername, darkLightMode, color, colorC } =
    useContext(DataContext);
  const nameChange = () => {
    changeUsername("Hari");
  };
  const ChangeMode = () => {
    darkLightMode();
  };
  const colorHand = () => {
    colorC();
  };
  return (
    <>
      <NavigationNavBar />
      <div className={darkMode ? "dark-mode" : "light-mode"}>
        <h1>
          {" "}
          Well Come To MY Setting Screen {username} {darkLightMode}
        </h1>
        <button onClick={nameChange}> click to change use name</button>

        <div class="search-container">
          <input type="text" id="search-input" placeholder="Search..."></input>
          <button id="search-button">Search</button>
          <br></br>
          <br></br>
        </div>
        <button onClick={ChangeMode}>click to change bg</button>
        <h1 className={color ? "text-color" : "bg-color"}>hi </h1>
        <button onClick={colorHand}>click to change bg</button>
      </div>
    </>
  );
};
export default SettingScreen;
