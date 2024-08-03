import { useContext } from "react";
import NavigationNavBar from "../components/nav-navbar/navigation-navbar";
import { DataContext } from "../App";
import "./style.css";

const HomeScreen = () => {
  // const globalData =useContext(DataContext);
  const { darkLightMode, darkMode, color, counter, username } =
    useContext(DataContext); // D-structuring

  console.log(username, "username.....");
  const colorChange = () => {
    // darkLightMode()
    // colorC();
  };
  // take one function use in setting's screen that function
  return (
    <>
      <div>
        <NavigationNavBar />
        <h1 className={darkMode ? "dark-mode" : "light-mode"}>
          {" "}
          Well Come Home Screen
        </h1>

        <h1 className={color ? "text-color" : "bg-color"}>
          {" "}
          Well Come to My Screen {username} Your Age is {counter}
        </h1>
        {/* <button onClick={colorChange}>click to change</button> */}
      </div>
    </>
  );
};
export default HomeScreen;
