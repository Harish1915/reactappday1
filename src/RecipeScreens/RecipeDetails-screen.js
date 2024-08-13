import { Link, useParams } from "react-router-dom";
import RecipeNavBar from "../RecipeMaker/RecipeNavigationBar";
import { useEffect, useState } from "react";
import axios from "axios";
import SpinnEr from "../components/bootstrap/spinner/spinner";
import CustomList from "../components/lists/customlist/customlist";

const RecipeItemData = () => {
  const [recipeDetail, setRecipeDetails] = useState({});
  const { recipeId } = useParams();

  useEffect(() => {
    fetchEachProduct();
  }, [recipeId]);

  const fetchEachProduct = async () => {
    const { data, status } = await axios.get(
      `https://dummyjson.com/recipes/${recipeId}`
    );
    console.log(data);
    if (status === 200) {
      setRecipeDetails(data);
    }
  };

  return (
    <>
      <RecipeNavBar />
      <h1 className="text-center">Recipe Details Screen</h1>
      {Object.keys(recipeDetail).length > 0 ? (
        <div className="container d-flex justify-content-center">
          <div className="card mb-3" style={{ maxWidth: 540, backgroundColor: getRandomColor() }}>
            <h1>{recipeDetail.name}</h1>
            <img src={recipeDetail.image} className="card-img-top" alt={recipeDetail.title} />
            <div className="card-body">
              <h5 className="card-title">{recipeDetail.title}</h5>
              <p className="card-text">Rating: {recipeDetail.rating}</p>
              <h2>Ingredients:</h2>
              <CustomList list={recipeDetail.ingredients} />
              <h3>Instructions:</h3>
              <CustomList list={recipeDetail.instructions} />
              <Link to={"/findRecipes"}><button>Click-Me</button></Link>
            </div>
          </div>
        </div>
      ) : (
        <>
          <SpinnEr />
          <h1 className="text-center">Please wait Data Is Loading......</h1>
        </>
      )}
    </>
  );
};

const getRandomColor = () => {
  const colors = ["#f7cac9", "#87ceeb", "#ffd7be", "#c9e4ca", "#e5d8b6"];
  return colors[Math.floor(Math.random() * colors.length)];
};

export default RecipeItemData;