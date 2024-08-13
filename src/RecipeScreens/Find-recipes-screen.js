import { useContext } from "react";
import RecipeNavBar from "../RecipeMaker/RecipeNavigationBar";
import { ItemsContext } from "../RecipeMaker/RecipeNav";
import { useNavigate } from "react-router-dom";

const FindRecipes = () => {
  const { recipeList, addFavoriteDishHandler } = useContext(ItemsContext);
  console.log(recipeList, "recipes.....");
  const navigate=useNavigate()

  const addFoodHandler = (eachFood) => {
    addFavoriteDishHandler(eachFood);
  };
  const goToFavoriteHandler=()=>{
    navigate("/favorite")
  }

  return (
    <>
      <RecipeNavBar />
      <h1>Find Recipes Screen</h1>
      {recipeList &&
        
        recipeList.length > 0 &&
        recipeList.map((item, index) => {
          return (
            <div key={index}>
              <h1>{item.name}</h1>
              <img src={item.image} alt={item.name} height={150} width={150} />
              {item.existsInFavorite ? (
                <button onClick={goToFavoriteHandler}>Go to Favorite</button>
              ) : (
                <button onClick={() => addFoodHandler(item)}>
                  Add To Favorite{" "}
                </button>
              )}
            </div>
          );
        })}
    </>
  );
};

export default FindRecipes;
