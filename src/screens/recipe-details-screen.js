import axios from "axios";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import CustomList from "../components/lists/customlist/customlist";
import "./recipe-Details.css"; // Import the CSS file

const RecipeDetail = () => {
  const { recipeId } = useParams();
  const [recipeDetail, setRecipeDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchEachProduct();
  }, [recipeId]);

  const fetchEachProduct = async () => {
    try {
      const { data } = await axios.get(`https://dummyjson.com/recipes/${recipeId}`);
      setRecipeDetails(data);
    } catch (error) {
      setError("Error fetching recipe details. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="spinner-container">
        <Spinner animation="border" />
        <h1 className="spinner-text">Please wait, data is fetching...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <h1 className="error-text">{error}</h1>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="card">
        <h1 className="card-title">{recipeDetail.name}</h1>
        <img
          className="card-image"
          src={recipeDetail.image}
          alt={recipeDetail.name}
          width={200}
          height={200}
        />
        <p className="card-rating">Rating: {recipeDetail.rating}</p>
        <h1>Ingredients</h1>
        <CustomList list={recipeDetail.ingredients} />
        <h1>Instructions</h1>
        <CustomList list={recipeDetail.instructions} />
      </div>
    </div>
  );
};

export default RecipeDetail;
