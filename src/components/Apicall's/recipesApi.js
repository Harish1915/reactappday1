import axios from "axios";
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const RecipeFind = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { data } = await axios.get("https://dummyjson.com/recipes");
    const idNdata = data.recipes.map((eachRecipe) => {
      return { id: eachRecipe.id, recipeName: eachRecipe.name };
    });
    setRecipes(idNdata);
  };

  const selectHandler = (event) => {
    const selectedRecipeId = event.target.value;
    fetchEachRecipe(selectedRecipeId);
  };

  const fetchEachRecipe = async (recipeId) => {
    const { data } = await axios.get(`https://dummyjson.com/recipes/${recipeId}`);
    setSelectedRecipe(data);
  };

  const getBackgroundClass = (id) => {
    const classes = [
      "bg-primary",
      "bg-secondary",
      "bg-success",
      "bg-danger",
      "bg-warning",
      "bg-info",
      "bg-light",
      "bg-dark"
    ];
    return classes[id % classes.length];
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Select the Recipes</h1>
      {recipes.length > 0 && (
        <div className="d-flex justify-content-center mb-4">
          <select onChange={selectHandler} className="form-select w-50">
            {recipes.map((each) => (
              <option value={each.id} key={each.id}>
                {each.recipeName}
              </option>
            ))}
          </select>
        </div>
      )}

      {Object.keys(selectedRecipe).length > 0 && (
        <div className="row justify-content-center">
          <div className={`card text-center text-white ${getBackgroundClass(selectedRecipe.id)}`} style={{ width: "18rem" }}>
            <img
              src={selectedRecipe.image}
              className="card-img-top"
              alt={selectedRecipe.name}
              style={{ width: "100%", height: "auto" }}
            />
            <div className="card-body">
              <h5 className="card-title">{selectedRecipe.name}</h5>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipeFind;
