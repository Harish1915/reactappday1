import { useContext } from "react";
import NavigationNavBar from "../components/nav-navbar/navigation-navbar";
import { DataContext } from "../App";
import "./style.css";
import { RecipeContext } from "../navigation/navigation";
import { useNavigate } from "react-router-dom";

const HomeScreen = () => {
  // const globalData =useContext(DataContext);
  const { darkLightMode, darkMode, color, counter, username } =
    useContext(DataContext); // D-structuring
  const { recipeList, favDishHandler } = useContext(RecipeContext);
  const navigate = useNavigate();

  console.log(recipeList, "recipes.......");
  console.log(username, "username.....");
  const colorChange = () => {
    // darkLightMode()
    // colorC();
  };
  // take one function use in setting's screen that function
  const addFoodHandler = (eachFood) => {
    favDishHandler(eachFood);
  };
  const goTOFavoriteHandler = () => {
    navigate("favoriteRecipes");
  };
  return (
    <>
      <div>
        <NavigationNavBar />
        <h1 className={darkMode ? "dark-mode" : "light-mode"}>
          {" "}
          Well Come Home Screen
        </h1>
        {recipeList &&
          recipeList.length > 0 &&
          recipeList.map((each) => {
            return (
              <div key={each.id}>
                <h1>{each.name}</h1>
                <img src={each.image} height={150} width={150} />
                <button>View Recipe</button>

                {each.existInFavorite ? (
                  <button onClick={goTOFavoriteHandler}>Go to favorite</button>
                ) : (
                  <button onClick={() => addFoodHandler(each)}>
                    Add to favorite recipe
                  </button>
                )}
              </div>
            );
          })}

        {/* <h1 className={color ? "text-color" : "bg-color"}>
          {" "}
          Well Come to My Screen {username} Your Age is {counter}
        </h1> */}
        {/* <button onClick={colorChange}>click to change</button> */}
      </div>
    </>
  );
};
export default HomeScreen;
