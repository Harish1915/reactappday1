import { Component } from "react";
import axios from "axios";
import React from "react";
import CustomList from "../lists/customlist/customlist";
import Heading1 from "../headings/heading";

class RecipeList extends Component {
  state = {
    recipesList: [],
    loader: true,
    error: false,
  };

  fetchRecipes = async () => {
    try {
      // const response = await axios.get("https://dummyjson.com/recipes");// here we r doing D-structure
      const { status, data } = await axios.get("https://dummyjson.com/recipes");
      if (status === 200) {
        this.setState({
          recipesList: data.recipes,
          loader: false,
        });
      }
    } catch (error) {
      this.setState({
        error: true,
        loader: false,
      });
    }
  };

  componentDidMount() {
    this.fetchRecipes();
  }

  render() {
    return (
      <React.Fragment>
        <h1>Recipes</h1>
        {this.state.loader ? (
          <h2>please wait</h2>
        ) : (
          <>
            {this.state.recipesList.map((eachRecipe) => {
              const { name, image, ingredients, instructions } = eachRecipe;

              return (
                <React.Fragment key={eachRecipe.id}>
                  <h4>{name}</h4>
                  <img src={image} height={100} width={100} />
                  <Heading1 title={`Ingredients Required For Dish ${name}`} />
                  <CustomList list={ingredients}/>
                  {/* <ol>
                    {ingredients.map((eachIngredient, index) => (
                      <li key={index}>{eachIngredient}</li>
            ))}
                  </ol> */}
                  <Heading1 title={`Instructions Required For Dish ${name}`} />
                  <CustomList list={instructions} />
                </React.Fragment>
              );
            })}
          </>
        )}
      </React.Fragment>
    );
  }
}
export default RecipeList;
