import React, { useEffect, useState } from "react";
import { greetingFn } from "../../jsFunctions/refresh";
import axios from "axios";

const ShowFetch = () => {
  const [greeting, setGreeting] = useState("");
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    console.log("useEffect");

    greetingHandler();
    fetchRecipes();

  }, []);

  const greetingHandler = () => {
    const greetingString = greetingFn();
    setGreeting(greetingString);
  };

  const fetchRecipes = async () => {
    try {
      const { status, data } = await axios.get("https://dummyjson.com/recipes");
      if (status === 200) {
        setRecipes(data);
      }
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  return (
    <div>
      <h1>Time TO {greeting}</h1>
      <ul>
        {recipes.length>1?(
        recipes.map((each, index) => (
          <li key={index}>{each.title}</li>
        ))):(<li> no recipes </li>)}
      </ul>
    </div>
  );
};

export default ShowFetch;
