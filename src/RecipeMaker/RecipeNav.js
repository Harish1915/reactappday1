import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainScreen from "../RecipeScreens/Main-screen";
import SearchScreen from "../RecipeScreens/search-screen";
import ErrorScreen from "../RecipeScreens/Error-screen";
import RecipePage from "../RecipeScreens/Recipes-screen";
import RecipeItemData from "../RecipeScreens/RecipeDetails-screen";
import FindRecipes from "../RecipeScreens/Find-recipes-screen";
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import FavoriteScreen from "../RecipeScreens/Favorite-screen";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LocationScreen from "../RecipeScreens/Location-screen";

export const ItemsContext = createContext();

const RecipeStack = () => {
  const [recipeList, setRecipeList] = useState([]);
  const [favoriteDish, sectFavoriteDish] = useState([]);

  useEffect(() => {
    fetchRecipe();
  }, []);

  const fetchRecipe = async () => {
    try {
      const { status, data } = await axios.get("https://dummyjson.com/recipes");
      const newData = data.recipes.map((EachData) => {
        return { ...EachData, existsInFavorite: false }; //existsFavorite newData is pushed to api Data our end
      });
      console.log(newData, "newdata");

      if (status === 200) {
        console.log(data);
        setRecipeList(newData);
      }
    } catch (error) {}
  };
  const addFavoriteDishHandler = (newDish) => {
    const recipeExist = favoriteDish.find(
      (eachFood) => eachFood.id == newDish.id
    );

const newRecipeList=recipeList.map((eachRecipe)=>{
    if(eachRecipe.id==newDish.id){
        return{...eachRecipe,existsInFavorite: true}
    }else{
return eachRecipe
    }
});
setRecipeList(newRecipeList);

    if (recipeExist) {
      toast.warn("already exists in Favorite foods", {
        position: "top-left",
      });
    } else {
      sectFavoriteDish([...favoriteDish, newDish]);
      toast.success("Added to favourites !", {
        position: "top-right",
      });
    }
  };
  const removeFromFavorite = (id) => {
    
const newRecipeList=recipeList.map((eachRecipe)=>{
    if(eachRecipe.id==id){
        return{...eachRecipe,existsInFavorite: false}
    }else{
return eachRecipe
    }
});
setRecipeList(newRecipeList);
    const newFavoriteList = favoriteDish.filter(
      (eachDish) => eachDish.id != id
    );
    sectFavoriteDish(newFavoriteList);
  };

  return (
    <ItemsContext.Provider
      value={{
        recipeList: recipeList,
        favoriteDish: favoriteDish,
        addFavoriteDishHandler: addFavoriteDishHandler,
        removeFromFavorite: removeFromFavorite,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainScreen />}></Route>
          <Route path="/recipe" element={<RecipePage />}></Route>
          <Route path="/search" element={<SearchScreen />}></Route>
          <Route path="/findRecipes" element={<FindRecipes />}></Route>
          <Route path="/favorite" element={<FavoriteScreen />}></Route>
          <Route path="/location" element={<LocationScreen />}></Route>


          <Route path="*" element={<ErrorScreen />}></Route>

          {/* dynamic routing */}
          <Route
            path="/recipe/:cuisine/:recipeId"
            element={<RecipeItemData />}
          ></Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </ItemsContext.Provider>
  );
};
export default RecipeStack;
