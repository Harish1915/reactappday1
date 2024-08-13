import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./RecipeSearch.css"; // Import the CSS file

const RecipeSearch = () => {
  const [recipeItem, setRecipeItem] = useState([]);
  const [SearchRecipe, setSearchRecipe] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchRecipe();
  }, []);

  const fetchRecipe = async () => {
    try {
      const { data, status } = await axios.get("https://dummyjson.com/recipes");
      if (status === 200) {
        setRecipeItem(data.recipes);
      }
    } catch (error) {
      setError("Error fetching recipes. Please try again later.");
      console.error("Error fetching recipes", error);
    }
  };

  const searchHandler = () => {
    return recipeItem.filter((recipe) =>
      recipe.name.toLowerCase().includes(SearchRecipe.toLowerCase())
    );
  };

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          id="search-input"
          placeholder="Search"
          value={SearchRecipe}
          onChange={(e) => setSearchRecipe(e.target.value)}
        />
      </div>

      <div className="recipes-container">
        {error && <div className="error-message">{error}</div>}
        {searchHandler().map((eachRecipe, index) => {
          const { name, image, rating, cuisine, id } = eachRecipe;
          return (
            <div
              className="recipe-card"
              style={{ backgroundColor: index % 2 === 0 ? '#f0f0f0' : '#e0e0e0' }}
              key={id}
            >
              <h1>{name}</h1>
              <img src={image} alt={name} width={150} height={150}   className="rotate" />
              <h4>Rating: {rating}</h4>
              <Link to={`/recipe/${cuisine}/${id}`}>
                <button className="see-more-link">
                  See More
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RecipeSearch;
