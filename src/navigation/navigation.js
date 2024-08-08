import axios from "axios";
import AboutScreen from "../screens/about-screen";
import BlogScreen from "../screens/blog-screen";
import DoctorScreen, { NewDoctor, OldDoctor } from "../screens/doctors-screen";
import HomeScreen from "../screens/home.-screen";
import InvalidScreen from "../screens/invalid-screen";
import RecipeDetail from "../screens/recipe-details-screen";
import SettingScreen from "../screens/setting-screen";
import UserScreen from "../screens/user-screen";
import { createContext, useEffect, useState } from "react";
import Favorite from "../screens/favprite-recipe-screen";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TestScreen from "../screens/test-screen";

const { BrowserRouter, Routes, Route, Router } = require("react-router-dom");

export const RecipeContext = createContext();
const NavigationStack = () => {
  const [recipeList, setRecipeList] = useState([]);
  const [favDish, setFavDish] = useState([]);

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const { status, data } = await axios.get("https://dummyjson.com/recipes");

      const newData = data.recipes.map((EachData) => {
        return { ...EachData, existInFavorite: false };
      });

      if (status === 200) {
        console.log(data);
        setRecipeList(newData);
        // console.log(newData, "newData..");
      }
    } catch (error) {}
  };
  const favDishHandler = (newDish) => {
    const recipeExists = favDish.find((eachFood) => eachFood.id == newDish.id);

    const newRecipeList = recipeList.map((eachRecipe) => {
      if (eachRecipe.id == newDish.id) {
        return { ...eachRecipe, existInFavorite: true };
      } else {
        return eachRecipe;
      }
    });

    setRecipeList(newRecipeList);

    if (recipeExists) {
      toast.error("!already exist in favorite food's", {
        position: "top-right",
      });
      
      // alert("already exists in favorite foods")
    } else {
      setFavDish([...favDish, newDish]);
      toast.success("Item Added in Favorite-rsp !", {
        position: "top-center",
      });
    }
  };
  
  const removeFromFavorite = (id) => {
    const newRecipeList = recipeList.map((eachRecipe) => {
      if (eachRecipe.id == id) {
        return { ...eachRecipe, existInFavorite: false };
      } else {
        return eachRecipe;
      }
    });
    setRecipeList(newRecipeList);
    const newFavDishList = favDish.filter((eachDish) => eachDish.id != id);
    setFavDish(newFavDishList);
  };
  return (
    <RecipeContext.Provider
      value={{
        recipeList: recipeList,
        favDish: favDish,
        favDishHandler: favDishHandler,
        removeFromFavorite: removeFromFavorite,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="/blog" element={<BlogScreen />} />
          <Route path="/setting" element={<SettingScreen />} />
          <Route path="*" element={<InvalidScreen />} />
          <Route path="recipes" element={<UserScreen />} />
          <Route path="favoriteRecipes" element={<Favorite />} />
          <Route path="/TestTab" element={<TestScreen />} />


          {/* nested navigation */}

          <Route path="/doctors" element={<DoctorScreen />}>
            <Route path="new" element={<NewDoctor />} />
            <Route path="old" element={<OldDoctor />} />
          </Route>

          {/* dynamic routes */}
          <Route
            path="recipes/:cuisine/:recipeId"
            element={<RecipeDetail />}> </Route>
          {/* <Route path="user/:admin" element={<AdminScreen/>}></Route> */}
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </RecipeContext.Provider>
  );
};
export default NavigationStack;
// " * " is represents the after '/' anything user enter it's directly go to the home screen
