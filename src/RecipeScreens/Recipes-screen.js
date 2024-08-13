import { useEffect, useState } from "react";
import RecipeNavBar from "../RecipeMaker/RecipeNavigationBar";
import axios from "axios";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const RecipePage = () => {
  const [recipeList, setRecipeList] = useState([]);

  useEffect(() => {
    fetchRecipe();
  }, []);

  const fetchRecipe = async () => {
    try {
      const { data, status } = await axios.get("https://dummyjson.com/recipes");
      if (status === 200) {
        setRecipeList(data.recipes);
        console.log(data.recipes);
      }
    } catch (error) {}
  };
  const notify=()=>toast("View Recipe Details....!")

  return (
    <>
      <RecipeNavBar />
      <h1>Recipe Screen</h1>
      <div>
        {recipeList.map((eachRecipe) => {
          const { name, image, rating, id, cuisine } = eachRecipe;
          return (
            <div key={eachRecipe.id} >
              <img src={image} height={150} width={150} />
              <h5> DishName:{name}</h5>
              <h4>Rating :{rating}</h4>
              <h5>Cuisine:{eachRecipe.cuisine}</h5>
              <h5>Difficulty:{eachRecipe.difficulty}</h5>
              <h6>MealType:{eachRecipe.mealType}</h6>
              <button onClick={notify}>
                <Link to={`/recipe/${cuisine}/${id}`} style={{ textDecoration: "none" }}>
                  View Recipe
                </Link>
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RecipePage;