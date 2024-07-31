import { useEffect, useState } from "react";
import NavigationNavBar from "../components/nav-navbar/navigation-navbar";
import axios from "axios";
import { Link } from "react-router-dom";
import "./recipes-screen.css"; // Import your CSS file

const RecipesScreen = () => {
  const [recipeList, setRecipeList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const { status, data } = await axios.get("https://dummyjson.com/recipes");
      if (status === 200) {
        setRecipeList(data.recipes); // Assuming the API response contains a "recipes" array
      }
    } catch (error) {
      setError("Error fetching recipes. Please try again later.");
      console.error("Error fetching recipes:", error);
    }
  };

  return (
    <>
      <NavigationNavBar />
      <img src="https://img.freepik.com/premium-vector/vector-spicy-noodle-menu-food-banner-promotion-store-template_737924-341.jpg?w=1060"  width={1450}height={550} style={{margin:10}}/>

      <div className="recipes-container">
        {error && <div className="error-message">{error}</div>}
        {recipeList.map((eachRecipe) => {
          const { name, rating, image, id, cuisine } = eachRecipe;
          return (
            <div key={id} className="recipe-card">
              <h5>Id: {id}</h5>
              <h1>Name: {name}</h1>
              <img src={image} alt={name} width={150} height={150} />
              <h4>Rating: {rating}</h4>
             
                <Link to={`/recipes/${cuisine}/${id}`} className="see-more-link">
                <button className="see-more-link"> SEE MORE</button>
                </Link>
              
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RecipesScreen;
